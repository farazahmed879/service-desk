"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputFields/InputField";

export default function VehicleRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const router =useRouter()
  const onSubmit = (data: any) => {
    console.log("Vehicle Registration Form Submitted:", data);
    alert("Vehicle Registration Form submitted successfully!");
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
      <h2 className="text-2xl font-semibold mb-4">Vehicle Registration Form</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField
          label="Owner Full Name"
          name="ownerName"
          register={register}
          placeholder="Enter full name"
        />
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField
          label="Vehicle Make"
          name="vehicleMake"
          register={register}
          placeholder="Enter vehicle make"
        />
        <InputField
          label="Vehicle Model"
          name="vehicleModel"
          register={register}
          placeholder="Enter vehicle model"
        />
        <InputField
          label="Year of Manufacture"
          name="year"
          register={register}
          type="number"
          placeholder="Enter year"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField
          label="Vehicle Registration Number"
          name="registrationNumber"
          register={register}
          placeholder="Enter registration number"
        />
        <InputField
          label="Address"
          name="address"
          register={register}
          textarea
          rows={3}
          placeholder="Enter address"
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
