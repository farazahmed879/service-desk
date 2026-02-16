"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

export interface FormData {
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
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    onSave(data);
    router.push("/dashboard/services");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-xl border bg-white p-6 shadow"
    >
      <h2 className="mb-4 text-2xl font-semibold">Add Service</h2>

      <input
        type="text"
        placeholder="Service "
        {...register("name", { required: "Service name is required" })}
        className={`w-60 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          errors.name ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.name && (
        <p className="text-sm text-red-500">{errors.name.message}</p>
      )}

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Fees"
          {...register("fees", { required: "Fees are required" })}
          className={`w-32 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.fees ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.fees && (
          <p className="text-sm text-red-500">{errors.fees.message}</p>
        )}

        <select
          {...register("type", { required: "Type is required" })}
          className={`w-40 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.type ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select Type</option>
          <option value="Government">Government</option>
          <option value="Private">Private</option>
          <option value="Other">Other</option>
        </select>
        {errors.type && (
          <p className="text-sm text-red-500">{errors.type.message}</p>
        )}
      </div>

      <textarea
        placeholder="Description"
        {...register("description")}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
      />

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.push("/dashboard/services")}
          className="rounded-lg bg-gray-500 px-4 py-2 font-semibold text-white hover:bg-gray-600"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </form>
  );
}



