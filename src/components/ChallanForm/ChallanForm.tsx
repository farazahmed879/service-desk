"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputFields/InputField";

export default function ChallanForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const onSubmit = (data: any) => {
    console.log("Challan Form Submitted:", data);
    alert("Challan Form submitted successfully!");
    window.location.reload();

  };

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <div className="flex flex-col mb-4">
        <label className="font-medium text-gray-700 mb-1 ">User:</label>
        <input
          type="text"
          placeholder="User"
          {...register("userName")}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Bill & Payments
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Payment Type</label>
            <select
              {...register("paymentType")}
              className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
            >
              <option value="">Select Payment Type</option>
              <option value="waterBill">Water Bill</option>
              <option value="electricityBill">Electricity Bill</option>
              <option value="gasBill">Gas Bill</option>
              <option value="universityChallan">University Challan</option>
              <option value="trafficChallan">Traffic Challan</option>
              <option value="taxPayment">Tax Payment</option>
            </select>
          </div>

          <InputField
            label="Invoice Number"
            name="InvoiceNumber"
            register={register}
            registerOptions={{ required: true }}
            placeholder="Enter Your Invoice number"
          />

          <div></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <InputField label="Payment Date" name="paymentDate" register={register} type="date" />
          <InputField label="Amount" name="amount" register={register} type="number" placeholder="Enter amount" />
          <div></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <InputField label="Paid By (CNIC/Name)" name="paidBy" register={register} placeholder="Enter CNIC or Name" />
          <div></div>
          <div></div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <InputField label="Remarks" name="remarks" register={register} textarea rows={3} placeholder="Enter any remarks" />
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

    </div>




  );
}
