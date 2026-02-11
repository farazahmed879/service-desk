"use client";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputFields/InputField";
import type { birth_Certificate } from "@/app/dashboard/users/types";
import { useState } from "react";
import { getAll } from "@/services/crud_services";
import { useEffect } from "react";
export default function BirthCertificateServicePage() {
  const router = useRouter();
const [ birth_Certificate ,setbirth_Certificate] =useState<birth_Certificate[]>([])
  const { register, handleSubmit, control, reset } = useForm<birth_Certificate>(
    {
      defaultValues: {
        userName: "",
        ChildName: "",
        DOB: "",
        PlaceOfBirth: "",
        Gender: "",
        FatherName: "",
        MotherName: "",
        FatherCNIC: "",
        MotherCNIC: "",
        ContactNumber: "",
        ParentMobile: "",
        Address: "",
      },
    },
  );

  const onSubmit = (data: birth_Certificate) => {
    console.log(" Form Submitted:", data);
    alert("Birth Certificate Submitted Successfully!");
    reset();
  };
  const fetchAllCertificates = async () => {
    try {
      const data = await getAll<birth_Certificate>("https://dog.ceo/dog-api");
      setbirth_Certificate(data);
    } catch (error) {
      console.error("Failed to fetch Certificates:", error);
    }
  };

  useEffect(() => {
    fetchAllCertificates();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl bg-white p-6 shadow-md"
    >
      <div className="mb-4 flex flex-col">
        <label className="mb-1 font-medium text-gray-700">User:</label>

        <input
          type="text"
          placeholder="User"
          {...register("userName")}
          className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <h2 className="mb-4 text-2xl font-semibold">Birth Certificate</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="Child Full Name"
          name="ChildName"
          register={register}
          placeholder="Child Full Name"
        />
        <InputField
          label="Date of Birth"
          name="DOB"
          type="date"
          register={register}
          placeholder="Date of Birth"
        />
        <InputField
          label="Place of Birth"
          name="PlaceOfBirth"
          register={register}
          placeholder="Place of Birth"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="Gender"
          name="Gender"
          register={register}
          options={["Male", "Female", "Other"]}
        />
        <InputField
          label="Father Name"
          name="FatherName"
          register={register}
          placeholder="Father Name"
        />
        <InputField
          label="Mother Name"
          name="MotherName"
          register={register}
          placeholder="Mother Name"
        />
        <InputField
          label="Father CNIC"
          name="FatherCNIC"
          register={register}
          placeholder="Father CNIC"
        />
        <InputField
          label="Mother CNIC"
          name="MotherCNIC"
          register={register}
          placeholder="Mother CNIC"
        />
        <InputField
          label="Parent Contact Number"
          name="ParentMobile"
          register={register}
          placeholder="Parent Contact Number"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="Address"
          name="Address"
          register={register}
          placeholder="Address"
        />
      </div>

      <div className="flex w-full justify-end gap-4">
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
  );
}
