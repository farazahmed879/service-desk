"use client";

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
    <div className="w-full bg-white shadow-md rounded-xl p-6 border border-gray-200">

      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        B-Form Application
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <InputField label="Child Name" name="childName" register={register} placeholder="Enter child name" />
          <InputField label="Father Name" name="fatherName" register={register} placeholder="Enter father name" />
          <InputField label="Mother Name" name="motherName" register={register} placeholder="Enter mother name" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <InputField label="Date of Birth" name="dob" register={register} type="date" />
          <InputField label="Place of Birth" name="placeOfBirth" register={register} placeholder="Enter place of birth" />
          <InputField label="Gender" name="gender" register={register} options={["Male", "Female", "Other"]} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField label="Parent CNIC" name="parentCnic" register={register} placeholder="Enter CNIC" />
          <InputField
            label="Permanent Address"
            name="permanentAddress"
            register={register}
            textarea
            rows={3}
            placeholder="Enter address"
          />
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-32 bg-blue-600 text-white font-medium py-2.5 rounded-lg shadow hover:bg-blue-700 transition"
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