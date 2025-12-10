"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";
import { useRouter } from "next/navigation";

export default function VehicleTransferForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter()

  const onSubmit = (data: any) => {
    console.log("Vehicle Transfer Data:", data);
    alert("Your Vehicle Transfer request submitted successfully!");
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
      <h2 className="text-2xl font-semibold mb-4">Vehicle Transfer </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField label="Vehicle Type" name="VehicleType" register={register} />
        <InputField label="Company / Make" name="Make" register={register} />
        <InputField label="Model" name="Model" register={register} />
        <InputField label="Year of Manufacture" name="Year" type="number" register={register} />
        <InputField label="Engine Number" name="EngineNumber" register={register} />
        <InputField label="Chassis Number" name="ChassisNumber" register={register} />
        <InputField label="Color" name="Color" register={register} />
        <InputField label="Registration Number" name="RegistrationNumber" register={register} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField label="Current Owner Name" name="CurrentOwnerName" register={register} />
        <InputField label="Current Owner CNIC" name="CurrentOwnerCNIC" register={register} />
        <InputField label="Current Owner Mobile" name="CurrentOwnerMobile" register={register} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField label="New Owner Name" name="NewOwnerName" register={register} />
        <InputField label="New Owner CNIC" name="NewOwnerCNIC" register={register} />
        <InputField label="New Owner Mobile" name="NewOwnerMobile" register={register} />
        <InputField label="New Owner Address" name="NewOwnerAddress" register={register} />
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
