"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

export default function ServiceFormPage() {
  const { service } = useParams();

  if (!service || Array.isArray(service)) {
    return <p className="text-red-500">Service not found</p>;
  }

  const DynamicForm = dynamic(() => import(`./${service}`), { ssr: false });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {service.replace(/-/g, " ")} Form
      </h1>
      <DynamicForm />
    </div>
  );
}



/* "use client";

import { useForm } from "react-hook-form";
import { Service } from "./data";

export default function ServiceForm({ service }: { service: any }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {service.fields?.map((field: any, idx: number) => (
        <div key={idx}>
          <label className="block mb-1 font-medium">{field.name}</label>

          {field.type === "select" ? (
            <select
              className="w-full border border-gray-300 rounded-lg p-2"
              {...register(field.name, { required: `${field.name} is required` })}
            >
              <option value="">Select {field.name}</option>
              {field.options?.map((opt: string, i: number) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder={field.placeholder || ""}
              {...register(field.name, { required: `${field.name} is required` })}
            />
          )}

          {errors[field.name]?.message && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors[field.name]?.message)}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="mt-4 w-full bg-green-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition"
        onClick={() => console.log("Submit button clicked")}
      >
        Submit
      </button>
    </form>
   );
}
 */



/* 
"use client";

import { Service } from "./data";
import { useState } from "react";

interface ServiceFormProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceForm({ service, onClose }: ServiceFormProps) {
  const initialForm: Record<string, any> = {};
  service.fields.forEach((field) => {
    initialForm[field.name] = field.type === "file" ? null : "";
  });

  const [form, setForm] = useState(initialForm);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted form for:", service.title, form);
    alert(`Form submitted for ${service.title}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl max-h-full overflow-y-auto w-full sm:w-3/4 lg:w-1/2"
      >
        <h2 className="text-xl font-bold mb-4 text-dark dark:text-white">{service.title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.fields.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className="font-medium text-dark dark:text-white">{field.name}</label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                >
                  <option value="">Select {field.name}</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={field.type === "file" ? undefined : form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder || `Enter ${field.name}`} // <-- placeholder
                  className="border p-2 rounded"
                  required
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded border">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
} */

/* "use client";

import { Service } from "./data";
import { useState } from "react";

interface ServiceFormProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceForm({ service, onClose }: ServiceFormProps) {
  const initialForm: Record<string, any> = {};
  service.fields.forEach((field) => {
    initialForm[field.name] = field.type === "file" ? null : "";
  });

  const [form, setForm] = useState(initialForm);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted form for:", service.title, form);
    alert(`Form submitted for ${service.title}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl max-h-full overflow-y-auto w-full sm:w-3/4 lg:w-1/2"
      >
        <h2 className="text-xl font-bold mb-4 text-dark dark:text-white">{service.title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.fields.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className="font-medium text-dark dark:text-white">{field.name}</label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                >
                  <option value="">Select {field.name}</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={field.type === "file" ? undefined : form[field.name]}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded border">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
 */