"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/_custom-components/InputField/InputField";
import { useState, useEffect } from "react";

interface NikahData {
  husbandName: string;
  wifeName: string;
  marriageDate: string;
  place: string;
}

interface NikahNameFormProps {
  serviceType?: string;
}

export default function NikahNameForm({ serviceType }: NikahNameFormProps) {
  const { register, handleSubmit, reset } = useForm<NikahData>();
  const [records, setRecords] = useState<NikahData[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nadraNikah");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("nadraNikah", JSON.stringify(records));
  }, [records]);

  const onSubmit = (data: NikahData) => {
    const newRecord = { ...data, id: Date.now().toString() };
    setRecords((prev) => [...prev, newRecord]);
    reset();
    alert("Nikah Name Submitted");
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter((r: any) => r.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField label="Husband Name" name="husbandName" register={register} />
        <InputField label="Wife Name" name="wifeName" register={register} />
        <InputField label="Marriage Date" name="marriageDate" register={register} type="date" />
        <InputField label="Place" name="place" register={register} />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Submitted Records</h3>
        {records.map((r: any) => (
          <div key={r.id} className="p-2 border mb-2 flex justify-between">
            <span>{r.husbandName} & {r.wifeName}</span>
            <button onClick={() => handleDelete(r.id)} className="text-red-500">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
