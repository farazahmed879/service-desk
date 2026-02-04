"use client";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputFields/InputField";
import type { number_Plate } from "@/app/dashboard/users/types";
import { useState } from "react";
import { getAll } from "@/services/crud_services";
import { useEffect } from "react";
export default function NumberPlateServicePage() {
  const router = useRouter();
const [number_plate ,setNumber_plate ] = useState<number_Plate[]>([]);
  const { register, handleSubmit, control, reset } = useForm<number_Plate>({
    defaultValues: {
      userName: "",
      VehicleType: "",
      Make: "",
      ChassisNumber: "",
      Color: "",
      OwnerName: "",
      FatherName: "",
      MobileNumber: "",
      Address: "",
      Province: "",
      City: "",
      Purpose: "",
      PreviousPlate: "",
    },
  });
  
  const onSubmit = (data: number_Plate) => {
    console.log(" Form Submitted:", data);
    alert("Number Plate Form submitted successfully!");
    reset();
  };

  const fetchAllNumberPlate = async () => {
    try {
      const data = await getAll<number_Plate>("https://dog.ceo/dog-api");
      setNumber_plate(data);
    } catch (error) {
      console.error("Failed to fetch passports:", error);
    }
  };

  useEffect(() => {
    fetchAllNumberPlate();
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
      <h2 className="mb-4 text-2xl font-semibold">Number Plate Service</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="Vehicle Type"
          name="VehicleType"
          register={register}
          placeholder="Enter Vehicle Type"
        />
        <InputField
          label="Company / Make"
          name="Make"
          register={register}
          placeholder="Enter Company / Make"
        />
        <InputField
          label="Model"
          name="Model"
          register={register}
          placeholder="Enter Model "
        />
        <InputField
          label="Year of Manufacture"
          name="Year"
          type="number"
          register={register}
          placeholder="Enter Year of Manufacture"
        />
        <InputField
          label="Engine Number"
          name="EngineNumber"
          register={register}
          placeholder="Enter Engine Number"
        />
        <InputField
          label="Chassis Number"
          name="ChassisNumber"
          register={register}
          placeholder="Enter Chassis Number "
        />
        <InputField
          label="Color"
          name="Color"
          register={register}
          placeholder="Enter Colour"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="Owner Name"
          name="OwnerName"
          register={register}
          placeholder="Enter Onwer Name"
        />
        <InputField
          label="Father Name"
          name="FatherName"
          register={register}
          placeholder="Father Name"
        />
        <InputField
          label="CNIC"
          name="CNIC"
          register={register}
          placeholder="Enter Your CNIC  Number"
        />
        <InputField
          label="Mobile Number"
          name="MobileNumber"
          register={register}
          placeholder="Enter Your Mobile  Number"
        />
        <InputField
          label="Address"
          name="Address"
          register={register}
          placeholder="Enter Your Address"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="Province"
          name="Province"
          register={register}
          placeholder="Province"
        />
        <InputField
          label="City"
          name="City"
          register={register}
          placeholder="City"
        />
        <InputField
          label="Registration Purpose"
          name="Purpose"
          register={register}
          placeholder="Enter Registration Purpose"
        />
        <InputField
          label="Previous Number Plate (Optional)"
          name="PreviousPlate"
          register={register}
          placeholder="Enter Previous Number Plate "
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
