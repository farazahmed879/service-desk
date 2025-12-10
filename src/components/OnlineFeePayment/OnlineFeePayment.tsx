"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";

export default function OnlineFeePaymentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Online Fee Payment Submitted:", data);
    alert("Your Online Fee Payment request submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Online Fee Payment</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField label="Full Name" name="fullName" register={register} placeholder="Enter your name" />
        <InputField label="CNIC Number" name="cnic" register={register} placeholder="Enter CNIC" />
        <InputField label="Payment Purpose" name="purpose" register={register} placeholder="Enter purpose" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField label="Amount" name="amount" register={register} type="number" placeholder="Enter amount" />
        <InputField label="Transaction Method" name="method" register={register} placeholder="JazzCash / Easypaisa / Bank" />
        <InputField label="Reference Number" name="reference" register={register} placeholder="Enter reference number" />
      </div>

      <div className="mt-4 flex justify-end">
        <button type="submit" className="w-32 bg-green-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </div>
    </form>
  );
}
