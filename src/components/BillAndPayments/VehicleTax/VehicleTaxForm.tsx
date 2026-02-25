"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import type { BillAndPayment } from "@/app/users/types";
import VehicleTaxList from "@/components/BillAndPayments/VehicleTax/VehicleTaxList";
import InputField from "@/components/_custom-components/InputField/InputField";
import { FaPlus } from "react-icons/fa";

interface ServiceFormProps {
  serviceType: string;
}

export default function VehicleTaxForm({ serviceType }: ServiceFormProps) {
  const [showForm, setShowForm] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { register, handleSubmit, reset } = useForm<BillAndPayment>({
    defaultValues: {
      userName: "",
      paymentType: "Vehicle Tax",
      InvoiceNumber: "",
      paymentDate: "",
      amount: "",
      paidBy: "",
      remarks: "",
    },
  });

  const storageKey = `bill_and_payments_${serviceType}`;
  const [records, setRecords] = useState<BillAndPayment[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setRecords(JSON.parse(saved));
    }
  }, [storageKey]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(storageKey, JSON.stringify(records));
    }
  }, [records, storageKey, isMounted]);

  if (!isMounted) return null;

  const onSubmit = (data: BillAndPayment) => {
    const newRecord = { ...data, id: Date.now().toString() };
    setRecords((prev) => [...prev, newRecord]);
    reset();
    setShowForm(false);
    alert(`${serviceType} Form Submitted Successfully`);
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter((r: any) => r.id !== id));
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      {!showForm ? (
        <>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div className="flex flex-col">
              <h1 className="mb-6 text-2xl font-bold text-gray-700">
                Vehicle Tax
              </h1>

              <label className="mb-1 font-medium text-gray-700">User :</label>
              <input
                type="text"
                placeholder="User"
                {...register("userName")}
                className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="flex items-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 active:scale-95"
              >
                <FaPlus size={14} />
                Create New
              </button>
            </div>
          </div>
          <VehicleTaxList records={records} onDelete={handleDelete} />
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <label className="mb-1 font-medium text-gray-700">User : </label>
          <input
            type="text"
            placeholder="User"
            {...register("userName")}
            className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mb-4 flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-bold capitalize text-gray-700">
              Vehicle Tax Payment
            </h2>
            {/* <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button> */}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InputField
              label="Owner Name"
              name="userName"
              register={register}
              placeholder="Enter Owner Name"
            />
            <InputField
              label="Registration Number"
              name="InvoiceNumber"
              register={register}
              placeholder="LEW-XXXX"
            />
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
              placeholder="Enter Amount"
              type="number"
            />
            <InputField
              label="Paid By"
              name="paidBy"
              register={register}
              placeholder="Enter Payer Name"
            />
          </div>
          <InputField
            label="Vehicle Details"
            name="remarks"
            register={register}
            placeholder="Enter Vehicle Model/Year"
            textarea
            rows={3}
          />
          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-lg bg-gray-100 px-6 py-2 font-medium text-gray-700 hover:bg-gray-200"
            >
              Back
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white shadow-md transition-all hover:bg-blue-700 active:scale-95"
            >
              Submit Payment
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
