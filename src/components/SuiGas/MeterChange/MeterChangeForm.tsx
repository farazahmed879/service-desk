"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import MeterChangeList from "./MeterChangeList";
import InputField from "@/components/_custom-components/InputField/InputField";
import { FaPlus } from "react-icons/fa";

interface MeterChangeFormData {
  userName: string;
  consumerId: string;
  meterNumber: string;
  reason: string;
  requestDate: string;
}

interface ServiceFormProps {
  serviceType: string;
}

export default function MeterChangeForm({ serviceType }: ServiceFormProps) {
  const [showForm, setShowForm] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { register, handleSubmit, reset } = useForm<MeterChangeFormData>({
    defaultValues: {
      userName: "",
      consumerId: "",
      meterNumber: "",
      reason: "Faulty Meter",
      requestDate: new Date().toISOString().split("T")[0],
    },
  });

  const storageKey = `sui_gas_${serviceType}`;
  const [records, setRecords] = useState<any[]>([]);

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

  const onSubmit = (data: MeterChangeFormData) => {
    const newRecord = {
      ...data,
      id: Date.now().toString(),
      status: "Submitted",
    };
    setRecords((prev) => [...prev, newRecord]);
    reset();
    setShowForm(false);
    alert(`${serviceType.replace(/-/g, " ")} Request Submitted Successfully`);
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      {!showForm ? (
        <>
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col">
              <h1 className="mb-6 text-2xl font-bold text-gray-700">
                Meter Change
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
                className="flex items-center gap-1 rounded-md bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700 active:scale-95"
              >
                <FaPlus size={12} />
                Create
              </button>
            </div>
          </div>
          <MeterChangeList records={records} onDelete={handleDelete} />
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
              Meter Change form
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InputField
              label="User Name"
              name="userName"
              register={register}
              placeholder="Enter User Name"
            />
            <InputField
              label="Consumer ID"
              name="consumerId"
              register={register}
              placeholder="Enter Consumer ID"
            />
            <InputField
              label="Current Meter #"
              name="meterNumber"
              register={register}
              placeholder="Enter Current Meter Number"
            />
            <InputField
              label="Reason for Change"
              name="reason"
              register={register}
              placeholder="e.g. Faulty, Damage, Upgrade"
            />
            <InputField
              label="Request Date"
              name="requestDate"
              register={register}
              type="date"
            />
          </div>
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
              Submit Request
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
