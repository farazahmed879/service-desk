"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import type { driving_License } from "@/app/users/types";
import LostLicenseList from "@/components/DrivingLicense/LostLicense/LostLicenseList";
import InputField from "@/components/_custom-components/InputField/InputField";
import { FaPlus } from "react-icons/fa";

interface ServiceFormProps {
    serviceType: string;
}

export default function LostLicenseForm({ serviceType }: ServiceFormProps) {
    const [showForm, setShowForm] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { register, handleSubmit, reset } = useForm<driving_License>({
        defaultValues: {
            userName: "",
            fullName: "",
            fatherName: "",
            dob: "",
            cnic: "",
            contactNumber: "",
            address: "",
            licenseType: "",
            issueDate: "",
            expiryDate: "",
        },
    });

    const storageKey = `driving_license_${serviceType}`;
    const [records, setRecords] = useState<(driving_License & { id: string })[]>([]);

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

    const onSubmit = (data: driving_License) => {
        const newRecord = { ...data, id: Date.now().toString() };
        setRecords((prev) => [...prev, newRecord]);
        reset();
        setShowForm(false);
        alert(`${serviceType.replace(/-/g, " ")} Form Submitted Successfully`);
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
                    <LostLicenseList records={records} onDelete={handleDelete} />
                </>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex items-center justify-between mb-4 border-b pb-4">
                        <h2 className="text-2xl font-bold text-gray-700 capitalize">Report Lost License</h2>
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
                        <InputField label="Full Name" name="fullName" register={register} placeholder="Enter Full Name" />
                        <InputField label="CNIC" name="cnic" register={register} placeholder="Enter CNIC" />
                        <InputField label="Lost License Number" name="licenseType" register={register} placeholder="Enter License Number (if known)" />
                        <InputField label="Approx. Issue Date" name="issueDate" register={register} type="date" />
                        <InputField label="Contact Number" name="contactNumber" register={register} placeholder="Enter Contact Number" />
                    </div>
                    <InputField label="Address" name="address" register={register} placeholder="Enter Full Address" textarea rows={3} />
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
                            Submit Report
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
