"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/_custom-components/InputField/InputField";
import type { CnicFormData } from "@/app/users/types";
import { getAll, create } from "@/services/crud_services";

export default function CnicForm() {
  const router = useRouter();
  const [cnic, setCnic] = useState<CnicFormData[]>([]);
  const { register, handleSubmit, control, reset } = useForm<CnicFormData>({
    defaultValues: {
      userName: "",
      FullName: "",
      MiddleName: "",
      LastName: "",
      FatherName: "",
      DOB: "",
      PlaceOfBirth: "",
      CNIC: "",
      Gender: "",
      ContactNumber: "",
      Email: "",
      CurrentAddress: "",
      PermanentAddress: "",
      fatherCnicFront: null,
      fatherCnicBack: null,
      motherCnicFront: null,
      motherCnicBack: null,
      birthCertificate: null,
    },
  });

  const onSubmit = (data: CnicFormData) => {
    console.log("Cnic Form Submitted:", data);
    alert("Cnic Form submitted successfully!");
    reset();
  };

  const fetchAllCnic = async () => {
    try {
      const data = await getAll<CnicFormData>("https://dog.ceo/dog-api");
      setCnic(data);
    } catch (error) {
      console.error("Failed to fetch CNIC:", error);
    }
  };

  useEffect(() => {
    fetchAllCnic();
  }, []);
  const createCnic = async (cnicData: Partial<CnicFormData>) => {
    try {
      const newCnic = await create<CnicFormData>(
        "http://localhost:8080/services/PassportByCnic",
        cnicData,
      );

      setCnic((prev) => [...prev, newCnic]);

      console.log("Passport created successfully:", newCnic);
    } catch (error) {
      console.error("Failed to create passport:", error);
    }
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      <div className="mb-4 flex flex-col">
        <label className="mb-1 font-medium text-gray-700">User:</label>
        <input
          type="text"
          placeholder="User"
          {...register("userName")}
          className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <h1 className="mb-6 text-2xl font-bold text-gray-700">
        CNIC Application Form
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <InputField
            label="Full Name"
            name="FullName"
            register={register}
            placeholder="Enter full name"
          />
          <InputField
            label="Father Name"
            name="FatherName"
            register={register}
            placeholder="Enter father name"
          />
          <InputField
            label="Date of Birth"
            name="DOB"
            register={register}
            type="date"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <InputField
            label="CNIC Number"
            name="CNIC"
            register={register}
            placeholder="Enter CNIC"
          />
          <InputField
            label="Gender"
            name="Gender"
            register={register}
            options={["Male", "Female", "Other"]}
          />
          <InputField
            label="Mobile"
            name="Mobile"
            register={register}
            placeholder="03XXXXXXXXX"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <InputField
            label="Address"
            name="Address"
            register={register}
            textarea
            rows={4}
            placeholder="Enter address"
          />
        </div>

        <h2 className="mt-6 text-xl font-semibold text-gray-700">
          Required Documents
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-gray-700">
              Birth Certificate / Form-B
            </label>
            <input
              type="file"
              accept="image/*,application/pdf"
              {...register("birthCertificate")}
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-2 block text-gray-700">
              Father CNIC (Front)
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("fatherCnicFront")}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-2 block text-gray-700">
              Father CNIC (Back)
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("fatherCnicBack")}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-2 block text-gray-700">
              Mother CNIC (Front)
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("motherCnicFront")}
              className="w-full rounded-md border px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-gray-700">
              Mother CNIC (Back)
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("motherCnicBack")}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          {/* <div>
            <label className="block text-gray-700 mb-2">Utility Bill (Residence Proof)</label>
            <input
              type="file"
              accept="image/*,application/pdf"
              {...register("utilityBill")}
              className="border rounded-md w-full px-3 py-2"
            />
          </div> */}
        </div>

        <h2 className="mt-6 text-xl font-semibold text-gray-700">Biometrics</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-gray-700">Your Live Photo</label>
            <input
              type="file"
              accept="image/*"
              capture="user"
              {...register("livePhoto")}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-2 block text-gray-700">Signature Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("signatureImage")}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>
        </div>

        <div className="mt-6 flex w-full justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push("/dashboard/services")}
            className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white shadow transition-all hover:bg-blue-700"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white shadow transition-all hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

/* "use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";

export default function CnicForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const onSubmit = (data: any) => {
    console.log("CNIC Form Submitted:", data);
    alert("CNIC Form submitted successfully!");
          window.location.reload();

  };

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-6 border border-gray-200">
 <div className="flex items-center gap-2 mb-4">
  <span className="font-medium text-gray-700">User:</span>
  <input
    type="text"
    placeholder="User"
    {...register("userName")}
    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
  />
</div>
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        CNIC Application Form
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField label="Full Name" name="FullName" register={register} placeholder="Enter full name" />
          <InputField label="Father Name" name="FatherName" register={register} placeholder="Enter father name" />
          <InputField label="Date of Birth" name="DOB" register={register} type="date" />
          <InputField label="CNIC Number" name="CNIC" register={register} placeholder="Enter CNIC" />
          <InputField label="Gender" name="Gender" register={register} options={["Male", "Female", "Other"]} />
          <InputField label="Mobile" name="Mobile" register={register} placeholder="03XXXXXXXXX" />
          <InputField label="Address" name="Address" register={register} textarea rows={4} placeholder="Enter address" />
        </div>
        <div className="w-full flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push("/dashboard/services")}
            className="w-40 bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-40 bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </div>


      </form>
    </div>
  );
}
 */
