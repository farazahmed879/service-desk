"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/_custom-components/InputField/InputField";
import { useState, useEffect } from "react";

interface BirthCertificateData {
  childName: string;
  fatherName: string;
  dob: string;
  placeOfBirth: string;
  address: string;
}

interface BirthCertificateFormProps {
  serviceType?: string;
}

export default function BirthCertificateForm({ serviceType }: BirthCertificateFormProps) {
  const { register, handleSubmit, reset } = useForm<BirthCertificateData>();
  const [records, setRecords] = useState<BirthCertificateData[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nadraBirthCertificate");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("nadraBirthCertificate", JSON.stringify(records));
  }, [records]);

  const onSubmit = (data: BirthCertificateData) => {
    const newRecord = { ...data, id: Date.now().toString() };
    setRecords((prev) => [...prev, newRecord]);
    reset();
    alert("Birth Certificate Submitted");
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter((r: any) => r.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField label="Child Name" name="childName" register={register} />
        <InputField label="Father Name" name="fatherName" register={register} />
        <InputField label="Date of Birth" name="dob" register={register} type="date" />
        <InputField label="Place of Birth" name="placeOfBirth" register={register} />
        <InputField label="Address" name="address" register={register} textarea rows={3} />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Submitted Records</h3>
        {records.map((r: any) => (
          <div key={r.id} className="p-2 border mb-2 flex justify-between">
            <span>{r.childName}</span>
            <button onClick={() => handleDelete(r.id)} className="text-red-500">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
