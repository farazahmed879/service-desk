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
  const router  = useRouter();

  const onSubmit = (data: any) => {
    console.log("Driving License Form Submitted:", data);
    alert("Driving License Form submitted successfully!");
          window.location.reload();

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md"
    >
        <div className="flex flex-col mb-4">
  <label className="font-medium text-gray-700 mb-1">User:</label>

  <input
    type="text"
    placeholder="User"
    {...register("userName")}
    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
  />
</div>
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
  );
}
