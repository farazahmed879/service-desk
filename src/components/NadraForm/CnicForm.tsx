"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/_custom-components/InputField/InputField";
import { useState, useEffect } from "react";

interface CnicFormData {
  fullName: string;
  fatherName: string;
  dob: string;
  cnicNumber: string;
  gender: string;
  mobile: string;
  address: string;
}

interface CnicFormProps {
  serviceType?: string;
}

export default function CnicForm({ serviceType }: CnicFormProps) {
  const { register, handleSubmit, reset } = useForm<CnicFormData>();
  const [records, setRecords] = useState<CnicFormData[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nadraCnic");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("nadraCnic", JSON.stringify(records));
  }, [records]);

  const onSubmit = (data: CnicFormData) => {
    const newRecord = { ...data, id: Date.now().toString() };
    setRecords((prev) => [...prev, newRecord]);
    reset();
    alert("CNIC Form Submitted");
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter((r: any) => r.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField label="Full Name" name="fullName" register={register} />
        <InputField label="Father Name" name="fatherName" register={register} />
        <InputField label="Date of Birth" name="dob" register={register} type="date" />
        <InputField label="CNIC Number" name="cnicNumber" register={register} />
        <InputField label="Gender" name="gender" register={register} options={["Male","Female","Other"]} />
        <InputField label="Mobile" name="mobile" register={register} />
        <InputField label="Address" name="address" register={register} textarea rows={3} />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Submitted Records</h3>
        {records.map((r: any) => (
          <div key={r.id} className="p-2 border mb-2 flex justify-between">
            <span>{r.fullName}</span>
            <button onClick={() => handleDelete(r.id)} className="text-red-500">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
