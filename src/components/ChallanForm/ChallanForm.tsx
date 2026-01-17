"use client";

import { useEffect } from "react";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputFields/InputField";
import type { bill_and_payment } from "@/app/dashboard/users/types";
import { useState } from "react";
import { getAll } from "@/app/services/crud_services";
import { FaPlus, FaUsers } from "react-icons/fa";

export default function PassportForm() {
  const router = useRouter();
  const [Challan, setChallan] = useState<bill_and_payment[]>([]);
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, control, reset } = useForm<bill_and_payment>({
    defaultValues: {
      userName: "",
      paymentType: "",
      InvoiceNumber: "",
      paymentDate: "",
      amount: "",
      paidBy: "",
      remarks: "",
    },
  });

  const onSubmit = (data: bill_and_payment) => {
    console.log("Payment  Form Submitted:", data);
    alert("Payment Form submitted successfully!");
    reset();
  };
  const fetchAllpayment = async () => {
    try {
      const data = await getAll<bill_and_payment>("https://dog.ceo/dog-api");
      setChallan(data);
    } catch (error) {
      console.error("failed to fetch the Payments");
    }
  };
  useEffect(() => {
    fetchAllpayment();
  }, []);

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      {!showForm && (

        <div className="flex items-end justify-between gap-4">

          <div className="flex flex-col">
            <h1 className="mb-6 text-2xl font-bold text-gray-700">
              Bill and Payment Service
            </h1>
            <label className="mb-1 font-medium text-gray-700">User :</label>
            <input
              type="text"
              placeholder="User"
              {...register("userName")}
              className="w-64 rounded-md border border-gray-300 px-3 py-2
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="flex items-center gap-1 rounded-md
                  bg-blue-600 px-3 py-2 text-xs font-medium text-white
                  hover:bg-blue-700 active:scale-95"
            >
              <FaPlus size={12} />
              Create
            </button>

            <button
              type="button"
              className="flex items-center gap-1 rounded-md
                  bg-blue-600 px-3 py-2 text-xs font-medium text-white
                  hover:bg-blue-700 active:scale-95"
            >
              <FaUsers size={12} />
              Get All Clients
            </button>
          </div>
        </div>
      )}


      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {showForm && (
          <>
            <h1 className="mb-6 text-2xl font-bold text-gray-700">
              Bill and Payments Application Form
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Payment Type
                </label>
                <select
                  {...register("paymentType")}
                  className="rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
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
                registerOptions={{
                  required: "Invoice number is required",
                  maxLength: {
                    value: 20,
                    message: "Invoice number cannot exceed 20 digits",
                  },
                  pattern: {
                    value: /^[0-9]{1,20}$/,
                    message: "Only digits allowed, max 20 digits",
                  },
                }}
                inputProps={{
                  maxLength: 20,
                  inputMode: "numeric",
                }}
                placeholder="Enter Your Invoice Number"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <InputField
                label="Payment Date"
                name="paymentDate"
                register={register}
                type="date"
              />
              <InputField
                label="Amount"
                name="amount"
                register={register}
                type="number"
                placeholder="Enter amount"
              />
              <div></div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <InputField
                label="CNIC Number"
                name="CNIC"
                register={register}
                registerOptions={{
                  required: "CNIC number is required",
                  pattern: {
                    value: /^\d{5}-\d{7}-\d$/,
                    message: "CNIC must be in format 12345-1234567-1",
                  },
                }}
                inputProps={{
                  maxLength: 15,
                  inputMode: "numeric",
                  placeholder: "12345-1234567-1",
                }}
              />
              
            </div>

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
          </>
        )}
      </form>
    </div>
  );
}
