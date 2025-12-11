"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";

export default function DrivingLicenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Driving License Form Submitted:", data);
    alert("Driving License Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4">Driving License Form</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="w-32 bg-green-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
