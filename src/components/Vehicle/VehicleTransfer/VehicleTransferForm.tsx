"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import type { vehicle_Transfer } from "@/app/users/types";
import VehicleTransferList from "@/components/Vehicle/VehicleTransfer/VehicleTransferList";
import InputField from "@/components/_custom-components/InputField/InputField";
import { FaPlus } from "react-icons/fa";

interface ServiceFormProps {
  serviceType: string;
}

export default function VehicleTransferForm({ serviceType }: ServiceFormProps) {
  const [showForm, setShowForm] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { register, handleSubmit, reset } = useForm<
    vehicle_Transfer & { id?: string }
  >({
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

  const storageKey = `vehicle_${serviceType}`;
  const [records, setRecords] = useState<(vehicle_Transfer & { id: string })[]>(
    [],
  );

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setRecords(JSON.parse(saved));
    }
  }, [storageKey]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(storageKey, JSON.stringify(records));
    }
  }, [records, storageKey, isMounted]);

  if (!isMounted) return null;

  const onSubmit = (data: vehicle_Transfer & { id?: string }) => {
    const newRecord = {
      ...data,
      id: Date.now().toString(),
    } as vehicle_Transfer & { id: string };
    setRecords((prev) => [...prev, newRecord]);
    reset();
    setShowForm(false);
    alert(`${serviceType} Form Submitted Successfully`);
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      {!showForm ? (
        <>
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col">
              <h1 className="mb-6 text-2xl font-bold text-gray-700">Vehicle Transfer</h1>

              <label className="mb-1 font-medium text-gray-700">User :</label>
              <input
                type="text"
                placeholder="User"
                {...register("userName")}
                className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="flex items-center gap-1 rounded-md bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700 active:scale-95"
              >
                <FaPlus size={12} />
                Create
              </button>
            </div>
          </div>

          <VehicleTransferList records={records} onDelete={handleDelete} />
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <label className="mb-1 font-medium text-gray-700">User : </label>
          <input
            type="text"
            placeholder="User"
            {...register("userName")}
            className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mb-4 flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-bold capitalize text-gray-700">
              vehicle transfer Form
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 rounded bg-gray-50 p-2 text-lg font-semibold text-gray-800">
                Vehicle Information
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <InputField
                  label="User Name"
                  name="userName"
                  register={register}
                  placeholder="Enter User Name"
                />
                <InputField
                  label="Vehicle Type"
                  name="VehicleType"
                  register={register}
                  placeholder="e.g. Car, Bike"
                />
                <InputField
                  label="Make"
                  name="Make"
                  register={register}
                  placeholder="e.g. Toyota"
                />
                <InputField
                  label="Model"
                  name="Model"
                  register={register}
                  placeholder="e.g. Corolla"
                />
                <InputField
                  label="Year"
                  name="Year"
                  register={register}
                  placeholder="Enter Year"
                  type="number"
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
                  placeholder="Enter Chassis Number"
                />
                <InputField
                  label="Registration Number"
                  name="RegistrationNumber"
                  register={register}
                  placeholder="Enter Registration Number"
                />
              </div>
            </div>

            {/* Current Owner Information */}
            <div>
              <h3 className="mb-4 rounded bg-gray-50 p-2 text-lg font-semibold text-gray-800">
                Current Owner Information
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <InputField
                  label="Owner Name"
                  name="currentOwnerName"
                  register={register}
                  placeholder="Enter Current Owner Name"
                />
                <InputField
                  label="Owner CNIC"
                  name="CurrentOwnerCNIC"
                  register={register}
                  placeholder="Enter Current Owner CNIC"
                />
                <InputField
                  label="Owner Mobile"
                  name="CurrentOwnerMobile"
                  register={register}
                  placeholder="Enter Current Owner Mobile"
                />
              </div>
            </div>

            {/* New Owner Information */}
            <div>
              <h3 className="mb-4 rounded bg-gray-50 p-2 text-lg font-semibold text-gray-800">
                New Owner Information
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <InputField
                  label="New Owner Name"
                  name="NewOwnerName"
                  register={register}
                  placeholder="Enter New Owner Name"
                />
                <InputField
                  label="New Owner CNIC"
                  name="NewOwnerCNIC"
                  register={register}
                  placeholder="Enter New Owner CNIC"
                />
                <InputField
                  label="New Owner Mobile"
                  name="NewOwnerMobile"
                  register={register}
                  placeholder="Enter New Owner Mobile"
                />
              </div>
              <InputField
                label="New Owner Address"
                name="NewOwnerAddress"
                register={register}
                placeholder="Enter New Owner Address"
                textarea
                rows={3}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-lg bg-gray-100 px-6 py-2 font-medium text-gray-700 hover:bg-gray-200"
            >
              Back
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white shadow-md transition-all hover:bg-blue-700 active:scale-95"
            >
              Submit Transfer
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
