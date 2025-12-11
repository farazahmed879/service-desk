"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";

export default function CnicForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("CNIC Form Submitted:", data);
    alert("CNIC Form submitted successfully!");
  };

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-6 border border-gray-200">
      
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

        <div className="w-full flex justify-end">
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
