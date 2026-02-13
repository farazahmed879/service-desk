"use client";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField/InputField";
import type { domicile_prc } from "@/app/users/types";
import { useState } from "react";
import { useEffect } from "react";

import { getAll } from "@/services/crud_services";
export default function DomicilePRCServicePage() {
  const router = useRouter();
  const [Domicile, setDomicile] = useState<domicile_prc[]>([]);
  const { register, handleSubmit, control, reset } = useForm<domicile_prc>({
    defaultValues: {
      userName: "",
      serviceType: "",
      FullName: "",
      FatherName: "",
      CNIC: "",
      Address: "",
      DOB: "",
      DistrictOrPlace: "",
      Purpose: "",
    },
  });

  const onSubmit = (data: domicile_prc) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
    reset();
  };
  const fetchAllDomicile = async () => {
    try {
      const data = await getAll<domicile_prc>("https://dog.ceo/dog-api");
      setDomicile(data);
    } catch (error) {
      console.error("Failed to fetch Domicle and Prc :", error);
    }
  };

  useEffect(() => {
    fetchAllDomicile();
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

      <h2 className="mb-4 text-2xl font-semibold">Domicile / PRC Service</h2>

      <div className="mb-4">
        <label className="mb-2 block font-medium">Select Service Type</label>
        <select
          {...register("serviceType")}
          className="inline-block w-auto rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="domicile">Domicile</option>
          <option value="prc">PRC</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField
          label="Full Name"
          name="FullName"
          register={register}
          placeholder="Enter Full Name"
        />
        <InputField
          label="Father Name"
          name="FatherName"
          register={register}
          placeholder="Enter Father Name"
        />
        <InputField
          label="CNIC Number"
          name="CNIC"
          register={register}
          placeholder="Enter CNIC Number"
        />
        <InputField
          label="Date of Birth"
          name="DOB"
          type="date"
          register={register}
          placeholder="Enter Date of Birth"
        />
        <InputField
          label="District"
          name="DistrictOrPlace"
          register={register}
          placeholder="Enter Your District"
        />
        <InputField
          label="Place of Birth"
          name="DistrictOrPlace"
          register={register}
          placeholder="Enter Place of Birth"
        />
        <InputField
          label="Purpose"
          name="Purpose"
          register={register}
          placeholder="Enter Purpose"
        />
        <InputField
          label="Address"
          name="Address"
          register={register}
          placeholder="Enter Your current Adress"
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
