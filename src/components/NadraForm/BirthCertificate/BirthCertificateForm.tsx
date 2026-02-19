"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/_custom-components/InputField/InputField";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import BirthCertificateList from "./BirthCertificateList";
import { BirthCertificateData } from "@/app/users/types";

export default function BirthCertificateForm({ serviceType = "birth-certificate" }: { serviceType?: string }) {
  const [showForm, setShowForm] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { register, handleSubmit, reset } = useForm<BirthCertificateData>();
  const [records, setRecords] = useState<BirthCertificateData[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("nadraBirthCertificate");
    if (saved) {
      setRecords(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("nadraBirthCertificate", JSON.stringify(records));
    }
  }, [records, isMounted]);

  if (!isMounted) return null;

  const onSubmit = (data: BirthCertificateData) => {
    const newRecord = { ...data, id: Date.now().toString() };
    setRecords((prev) => [...prev, newRecord]);
    reset();
    setShowForm(false);
    alert("Birth Certificate Submitted Successfully");
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
              <h1 className="mb-6 text-2xl font-bold text-gray-700 capitalize">
                Birth Certificate
              </h1>
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

          <BirthCertificateList records={records} onDelete={handleDelete} />
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex items-center justify-between mb-4 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-700">New Birth Certificate</h2>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InputField label="Child Name" name="childName" register={register} placeholder="Enter Child's Name" />
            <InputField label="Father Name" name="fatherName" register={register} placeholder="Enter Father's Name" />
            <InputField label="Date of Birth" name="dob" register={register} type="date" />
            <InputField label="Place of Birth" name="placeOfBirth" register={register} placeholder="City/Town" />
          </div>

          <InputField label="Address" name="address" register={register} placeholder="Enter Full Address" textarea rows={3} />

          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-6 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md"
            >
              Submit Application
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
