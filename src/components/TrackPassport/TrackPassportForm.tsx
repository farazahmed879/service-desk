"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputField/InputField";

export default function TrackPassportForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Tracking Passport:", data);
    alert(`Tracking status for passport number: ${data.passportNumber}`);
    // Here you can integrate API call to fetch the status
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4">Track Passport Application Status</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField
          label="Passport Number"
          name="passportNumber"
          register={register}
          placeholder="Enter your passport number"
        />
        <InputField
          label="Email"
          name="email"
          register={register}
          placeholder="Enter your email (optional)"
          type="email"
        />
      </div>

      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="w-32 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Track Status
        </button>
      </div>
    </form>
  );
}
