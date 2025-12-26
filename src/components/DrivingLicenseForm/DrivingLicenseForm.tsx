"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";

export default function DrivingLicenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("Driving License Form Submitted:", data);
    alert("Driving License Form submitted successfully!");
    window.location.reload();
  };
  
  console.log("Hello World");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-xl bg-white p-6 shadow-md"
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
      <h2 className="mb-4 text-2xl font-semibold">Driving License Form</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="Full Name"
          name="fullName"
          register={register}
          placeholder="Enter your full name"
        />
        <InputField
          label="Father/Husband Name"
          name="fatherName"
          register={register}
          placeholder="Enter father/husband name"
        />
        <InputField
          label="Date of Birth"
          name="dob"
          register={register}
          type="date"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="CNIC Number"
          name="cnic"
          register={register}
          placeholder="Enter CNIC"
        />
        <InputField
          label="Contact Number"
          name="contactNumber"
          register={register}
          placeholder="03XXXXXXXXX"
        />
        <InputField
          label="Address"
          name="address"
          register={register}
          textarea
          rows={3}
          placeholder="Enter your address"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="License Type"
          name="licenseType"
          register={register}
          options={["Motorcycle", "Car", "Heavy Vehicle"]}
        />
        <InputField
          label="Issue Date"
          name="issueDate"
          register={register}
          type="date"
        />
        <InputField
          label="Expiry Date"
          name="expiryDate"
          register={register}
          type="date"
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
