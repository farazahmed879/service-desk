"use client";
import React from "react";
import DataTable, { Column } from "@/components/_custom-components/DataTable/DataTable";
import { FaTrash, FaEye } from "react-icons/fa";
import type { driving_License } from "@/app/users/types";

interface ListProps {
    records: (driving_License & { id: string })[];
    onDelete: (id: string) => void;
}

export default function LostLicenseList({ records, onDelete }: ListProps) {
    const columns: Column<driving_License & { id: string }>[] = [
        {
            header: "Full Name",
            accessorKey: "fullName",
            className: "font-semibold text-blue-600",
        },
        {
            header: "CNIC",
            accessorKey: "cnic",
        },
        {
            header: "License #",
            accessorKey: "licenseType",
        },
        {
            header: "Issue Date",
            accessorKey: "issueDate",
        },
        {
            header: "Actions",
            cell: (row) => (
                <div className="flex gap-3">
                    <button
                        onClick={() => console.log("View", row)}
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                        <FaEye size={16} />
                    </button>
                    <button
                        onClick={() => onDelete(row.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                    >
                        <FaTrash size={16} />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full overflow-hidden">
            <DataTable
                data={records}
                columns={columns}
                emptyMessage="No lost license reports found."
            />
        </div>
    );
}
