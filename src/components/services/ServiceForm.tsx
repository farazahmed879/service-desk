"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  service: string;
  name: string;
  fees: string;
  type: string;
  description: string;
}

interface ServiceFormProps {
  onSave: (data: FormData) => void;
  onClose?: () => void;
}

export default function ServiceForm({ onSave, onClose }: ServiceFormProps) {
  const [formData, setFormData] = useState<FormData>({
    service: "",
    name: "",
    fees: "",
    type: "",
    description: "",
  });

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/dashboard/services");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(formData);
      }}
      className="space-y-4 rounded-xl border bg-white p-6 shadow"
    >
      <h2 className="mb-4 text-2xl font-semibold">Add Service</h2>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Service Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-90 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          placeholder="Fees"
          value={formData.fees}
          onChange={(e) => setFormData({ ...formData, fees: e.target.value })}
          className="w-24 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <select
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        className="w-50 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Type</option>
        <option>Government</option>
        <option>Private</option>
        <option>Other</option>
      </select>

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.push("/dashboard/services")}
          className="w-30 rounded-lg bg-blue-600 py-2.5 font-semibold text-white"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="w-30 rounded-lg bg-blue-600 py-2.5 font-semibold text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}
