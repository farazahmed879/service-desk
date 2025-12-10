"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";
import { useRouter } from "next/navigation";

export default function DomicilePRCForm() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { serviceType: "domicile" , userName: "",  },
  });

  const serviceType = watch("serviceType");
const router = useRouter();
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert(`Your ${data.serviceType === "domicile" ? "Domicile" : "PRC"} request submitted successfully!`);
      window.location.reload();

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
       <div className="flex items-center gap-2 mb-4">
  <span className="font-medium text-gray-700">User:</span>
  <input
    type="text"
    placeholder="User"
    {...register("userName")}
    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
  />
</div>

      <h2 className="text-2xl font-semibold mb-4">Domicile / PRC Service</h2>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Select Service Type</label>
       <select
  {...register("serviceType")}
  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-auto inline-block"
>
  <option value="domicile">Domicile</option>
  <option value="prc">PRC</option>
</select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField label="Full Name" name="FullName" register={register} />
        <InputField label="Father Name" name="FatherName" register={register} />
        <InputField label="CNIC Number" name="CNIC" register={register} />
        <InputField label="Date of Birth" name="DOB" type="date" register={register} />
        <InputField label="District / Place of Birth" name="DistrictOrPlace" register={register} />
        <InputField label="Purpose" name="Purpose" register={register} />
        <InputField label="Address" name="Address" register={register} />
      </div>

      <div className="w-full flex justify-end gap-4">
        <button
          type="button"
        onClick={() => router.push("/dashboard/services")}
          className="w-40 bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="w-40 bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
