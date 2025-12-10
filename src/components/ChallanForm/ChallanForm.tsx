"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";

export default function ChallanForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Challan Form Submitted:", data);
    alert("Challan Form submitted successfully!");
  };

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-6 border border-gray-200">

  {/* Title */}
  <h2 className="text-2xl font-bold text-gray-700 mb-6">
    Challan & Payments
  </h2>

  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

    {/* Row 1 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <InputField
        label="Challan Number"
        name="challanNumber"
        register={register}
        placeholder="Enter challan number"
      />
      <InputField
        label="Payment Date"
        name="paymentDate"
        register={register}
        type="date"
      />
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <InputField
        label="Amount"
        name="amount"
        register={register}
        type="number"
        placeholder="Enter amount"
      />
      <InputField
        label="Paid By (CNIC/Name)"
        name="paidBy"
        register={register}
        placeholder="Enter CNIC or Name"
      />
    </div>

    {/* Row 3 */}
    <div className="grid grid-cols-1 gap-6">
      <InputField
        label="Remarks"
        name="remarks"
        register={register}
        textarea
        rows={3}
        placeholder="Enter any remarks"
      />
    </div>

    {/* Submit */}
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
