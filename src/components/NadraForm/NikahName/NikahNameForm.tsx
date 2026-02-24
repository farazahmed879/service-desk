"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import NikahNameList from "./NikahNameList";
import { NikahData } from "@/app/users/types";

import InputField from "@/components/_custom-components/InputField/InputField";

export default function NikahNameForm({
  serviceType = "nikah-name",
}: {
  serviceType?: string;
}) {
  const [showForm, setShowForm] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { register, handleSubmit, reset } = useForm<NikahData>();
  const [records, setRecords] = useState<NikahData[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("nadraNikah");
    if (saved) {
      setRecords(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("nadraNikah", JSON.stringify(records));
    }
  }, [records, isMounted]);

  if (!isMounted) return null;

  const onSubmit = (data: NikahData) => {
    const newRecord = { ...data, id: Date.now().toString() };
    setRecords((prev) => [...prev, newRecord]);
    reset();
    setShowForm(false);
    alert("Nikah Name Application Submitted Successfully");
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
                Nikah Name Application
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

          <NikahNameList records={records} onDelete={handleDelete} />
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="mb-4 flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-700">
              New Nikah Nama Application
            </h2>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InputField
              label="Husband Name"
              name="husbandName"
              register={register}
              placeholder="Enter Husband's name"
            />
            <InputField
              label="Wife Name"
              name="wifeName"
              register={register}
              placeholder="Enter Wife's name"
            />
            <InputField
              label="Marriage Date"
              name="marriageDate"
              register={register}
              type="date"
            />
            <InputField
              label="Place of Marriage"
              name="place"
              register={register}
              placeholder="City/Town"
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
              className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white shadow-md hover:bg-blue-700"
            >
              Submit Application
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
