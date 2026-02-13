"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField/InputField";
import { useState } from "react";
import { useEffect } from "react";
// import { getAll } from "@/app/services/crud_services";

import type { b_form } from "@/app/users/types";

export default function b_Form() {
  const router = useRouter();
  const [b_form, setB_Form] = useState<b_form[]>([])
  const { register, handleSubmit, control, reset } = useForm<b_form>({
    defaultValues: {
      userName: "",
      childName: "",
      fatherName: "",
      motherName: "",
      dob: "",
      PlaceOfBirth: "",
      permanentAddress: "",
      gender: "",
      ContactNumber: "",
      parentCnic: "",
    },
  });

  const onSubmit = (data: b_form) => {
    console.log("B_Form  Submitted:", data);
    alert("B_Form  submitted successfully!");
    reset();
  };
  const fetchAllCnic = async () => {
    try {
      // const data = await getAll<b_form>("https://dog.ceo/dog-api");
      // setB_Form(data);
    } catch (error) {
      console.error("Failed to fetch B-Form:", error);
    }
  };

  useEffect(() => {
    fetchAllCnic();
  }, []);

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
      <h2 className="mb-6 text-2xl font-bold text-gray-700">
        B-Form Application
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <InputField
            label="Child Name"
            name="childName"
            register={register}
            placeholder="Enter child name"
          />
          <InputField
            label="Father Name"
            name="fatherName"
            register={register}
            placeholder="Enter father name"
          />
          <InputField
            label="Mother Name"
            name="motherName"
            register={register}
            placeholder="Enter mother name"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <InputField
            label="Date of Birth"
            name="dob"
            register={register}
            type="date"
          />
          <InputField
            label="Place of Birth"
            name="placeOfBirth"
            register={register}
            placeholder="Enter place of birth"
          />
          <InputField
            label="Gender"
            name="gender"
            register={register}
            options={["Male", "Female", "Other"]}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <InputField
            label="Parent CNIC"
            name="parentCnic"
            register={register}
            placeholder="Enter CNIC"
          />
          <InputField
            label="Permanent Address"
            name="permanentAddress"
            register={register}
            textarea
            rows={3}
            placeholder="Enter address"
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
    </div>
  );
}

/* "use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";

export default function BForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("B-Form Submitted:", data);
    alert("B-Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">B-Form Application</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputField label="Child Name" name="childName" register={register} placeholder="Enter child name" />
        <InputField label="Father Name" name="fatherName" register={register} placeholder="Enter father name" />
        <InputField label="Mother Name" name="motherName" register={register} placeholder="Enter mother name" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputField label="Date of Birth" name="dob" register={register} type="date" />
        <InputField label="Place of Birth" name="placeOfBirth" register={register} placeholder="Enter place of birth" />
        <InputField label="Gender" name="gender" register={register} options={["Male", "Female", "Other"]} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField label="Parent CNIC" name="parentCnic" register={register} placeholder="Enter CNIC" />
        <InputField label="Permanent Address" name="permanentAddress" register={register} textarea rows={3} placeholder="Enter address" />
      </div>

      <div className="mt-2 w-full flex justify-end">
        <button
          type="submit"
          className="w-32 bg-green-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
 */
