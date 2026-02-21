"use client";
import React from "react";
import type { vehicle_form } from "@/app/users/types";
import { FaTrash, FaEye } from "react-icons/fa";

interface RegistrationListProps {
    records: (vehicle_form & { id: string })[];
    onDelete: (id: string) => void;
}

export default function RegistrationList({ records, onDelete }: RegistrationListProps) {
    if (records.length === 0) {
        return (
            <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-lg">
                <p className="text-gray-500">No registration records found.</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-50 text-left">
                        <th className="p-3 border-b font-semibold text-gray-600">Owner Name</th>
                        <th className="p-3 border-b font-semibold text-gray-600">Vehicle</th>
                        <th className="p-3 border-b font-semibold text-gray-600">Reg #</th>
                        <th className="p-3 border-b font-semibold text-gray-600">Year</th>
                        <th className="p-3 border-b font-semibold text-gray-600 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record) => (
                        <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-3 border-b text-gray-700">{record.ownerName}</td>
                            <td className="p-3 border-b text-gray-700">{`${record.vehicleMake} ${record.vehicleModel}`}</td>
                            <td className="p-3 border-b text-gray-700">{record.registrationNumber}</td>
                            <td className="p-3 border-b text-gray-700">{record.year}</td>
                            <td className="p-3 border-b text-right">
                                <div className="flex justify-end gap-2">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                        <FaEye size={16} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(record.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                    >
                                        <FaTrash size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
