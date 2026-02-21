"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import type { number_Plate } from "@/app/users/types";
import NumberPlateList from "@/components/Vehicle/NumberPlate/NumberPlateList";
import InputField from "@/components/_custom-components/InputField/InputField";
import { FaPlus } from "react-icons/fa";

interface ServiceFormProps {
    serviceType: string;
}

export default function NumberPlateForm({ serviceType }: ServiceFormProps) {
    const [showForm, setShowForm] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { register, handleSubmit, reset } = useForm<number_Plate & { id?: string }>({
        defaultValues: {
            userName: "",
            VehicleType: "",
            Make: "",
            Year: "",
            EngineNumber: "",
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

    const storageKey = `vehicle_${serviceType}`;
    const [records, setRecords] = useState<(number_Plate & { id: string })[]>([]);

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

    const onSubmit = (data: number_Plate & { id?: string }) => {
        const newRecord = { ...data, id: Date.now().toString() } as number_Plate & { id: string };
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
                    <div className="flex items-end justify-between gap-4 mb-6">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold text-gray-700 capitalize">
                                {serviceType.replace(/-/g, " ")}
                            </h1>
                        </div>

                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => setShowForm(true)}
                                className="flex items-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 active:scale-95 transition-all"
                            >
                                <FaPlus size={14} />
                                Create New
                            </button>
                        </div>
                    </div>

                    <NumberPlateList records={records} onDelete={handleDelete} />
                </>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex items-center justify-between mb-4 border-b pb-4">
                        <h2 className="text-2xl font-bold text-gray-700 capitalize">Create {serviceType.replace(/-/g, " ")}</h2>
                        <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            Cancel
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <InputField label="User Name" name="userName" register={register} placeholder="Enter User Name" />
                        <InputField label="Vehicle Type" name="VehicleType" register={register} placeholder="e.g. Car, Bike" />
                        <InputField label="Make" name="Make" register={register} placeholder="e.g. Toyota, Honda" />
                        <InputField label="Year" name="Year" register={register} placeholder="Enter Year" type="number" />
                        <InputField label="Engine Number" name="EngineNumber" register={register} placeholder="Enter Engine Number" />
                        <InputField label="Chassis Number" name="ChassisNumber" register={register} placeholder="Enter Chassis Number" />
                        <InputField label="Color" name="Color" register={register} placeholder="Enter Vehicle Color" />
                        <InputField label="Owner Name" name="OwnerName" register={register} placeholder="Enter Owner Name" />
                        <InputField label="Father Name" name="FatherName" register={register} placeholder="Enter Father Name" />
                        <InputField label="Mobile Number" name="MobileNumber" register={register} placeholder="Enter Mobile Number" />
                        <InputField label="Province" name="Province" register={register} placeholder="Enter Province" />
                        <InputField label="City" name="City" register={register} placeholder="Enter City" />
                        <InputField label="Purpose" name="Purpose" register={register} placeholder="e.g. Commercial, Private" />
                        <InputField label="Previous Plate" name="PreviousPlate" register={register} placeholder="Enter Previous Plate (if any)" />
                    </div>

                    <InputField label="Address" name="Address" register={register} placeholder="Enter Address" textarea rows={3} />

                    <div className="flex justify-end gap-3 mt-8">
                        <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="px-6 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition-all active:scale-95"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
