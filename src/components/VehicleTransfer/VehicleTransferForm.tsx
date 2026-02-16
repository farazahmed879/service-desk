"use client";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import InputField from "@/components/_custom-components/InputField/InputField";
import type { vehicle_Transfer } from "@/app/users/types";

import { useState } from "react";
import { getAll } from "@/services/crud_services";
import { useEffect } from "react";
export default function VehicleTransfer() {
  const router = useRouter();
  const [Vehicle_Transfer, setVehicle_Transfer] = useState<vehicle_Transfer[]>(
    [],
  );

  const { register, handleSubmit, control, reset } = useForm<vehicle_Transfer>({
    defaultValues: {
      userName: "",
      VehicleType: "",
      Make: "",
      Model: "",
      Year: "",
      EngineNumber: "",
      ChassisNumber: "",
      RegistrationNumber: "",
      currentOwnerName: "",
      CurrentOwnerCNIC: "",
      CurrentOwnerMobile: "",
      NewOwnerName: "",
      NewOwnerMobile: "",
      NewOwnerAddress: "",
      NewOwnerCNIC: "",
    },
  });

  const onSubmit = (data: vehicle_Transfer) => {
    console.log("Vehicle Form Submitted:", data);
    alert("Vehicle Transfer Form submitted successfully!");
    reset();
  };
  const fetchAllVehicles = async () => {
    try {
      const data = await getAll<vehicle_Transfer>("https://dog.ceo/dog-api");
      setVehicle_Transfer(data);
    } catch (error) {
      console.error("Failed to fetch Transfers:", error);
    }
  };

  useEffect(() => {
    fetchAllVehicles();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl bg-white p-6 shadow-md"
    >
      <div className="mb-4 flex flex-col">
        <label className="mb-1 font-medium text-gray-700">User:</label>

        <input
          type="text"
          placeholder="User"
          {...register("userName")}
          className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <h2 className="mb-4 text-2xl font-semibold">Vehicle Transfer </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="Vehicle Type"
          name="VehicleType"
          register={register}
          placeholder="Vehicle Type"
        />
        <InputField
          label="Company / Make"
          name="Make"
          register={register}
          placeholder="Company/Make"
        />
        <InputField
          label="Model"
          name="Model"
          register={register}
          placeholder="Model"
        />
        <InputField
          label="Year of Manufacture"
          name="Year"
          type="number"
          register={register}
          placeholder="Year of Manufacture"
        />
        <InputField
          label="Engine Number"
          name="EngineNumber"
          register={register}
          placeholder="Engine Number"
        />
        <InputField
          label="Chassis Number"
          name="ChassisNumber"
          register={register}
          placeholder="Chassis Number"
        />
        <InputField
          label="Color"
          name="Color"
          register={register}
          placeholder="Color"
        />
        <InputField
          label="Registration Number"
          name="RegistrationNumber"
          register={register}
          placeholder="Registration Number"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="Current Owner Name"
          name="currentOwnerName"
          register={register}
          placeholder="Current Onwer Name"
        />
        <InputField
          label="Current Owner CNIC"
          name="CurrentOwnerCNIC"
          register={register}
          placeholder="Current Onwer CNIC"
        />
        <InputField
          label="Current Owner Mobile"
          name="CurrentOwnerMobile"
          register={register}
          placeholder="Current Onwer Mobile"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="New Owner Name"
          name="NewOwnerName"
          register={register}
          placeholder="New Onwer Name"
        />
        <InputField
          label="New Owner CNIC"
          name="NewOwnerCNIC"
          register={register}
          placeholder="New Onwer Cn"
        />
        <InputField
          label="New Owner Mobile"
          name="NewOwnerMobile"
          register={register}
          placeholder="New Owner Mobile"
        />
        <InputField
          label="New Owner Address"
          name="NewOwnerAddress"
          register={register}
          placeholder="New Onwer Address"
        />
      </div>

      <div className="flex w-full justify-end gap-4">
        <button
          type="button"
          onClick={() => router.push("/dashboard/services")}
          className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white shadow transition-all hover:bg-blue-700"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white shadow transition-all hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
