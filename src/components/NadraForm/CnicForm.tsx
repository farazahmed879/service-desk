"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "@/components/_custom-components/InputField/InputField";
import { useEffect } from "react";
import { FaPlus, FaUsers } from "react-icons/fa";



interface CnicFormData {
  id?: string;
  fullName: string;
  fatherName: string;
  dob: string;
  cnicNumber: string;
  gender: string;
  mobile: string;
  address: string;
}

interface ServiceFormProps {
  serviceType: string; 
}

export default function ServiceForm({ serviceType }: ServiceFormProps) {
  const [showForm, setShowForm] = useState(false);
  const { reset } = useForm<CnicFormData>();

  const storageKey = `nadra_${serviceType}`;

  const [records, setRecords] = useState<CnicFormData[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(records));
  }, [records, storageKey]);

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      {!showForm && (
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="mb-6 text-2xl font-bold text-gray-700 capitalize">
              {serviceType}
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
      )}
    </div>
  );
}
