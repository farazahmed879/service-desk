"use client";
import React from "react";
import DataTable, { Column } from "@/components/_custom-components/DataTable/DataTable";
import { FaTrash, FaUserEdit } from "react-icons/fa";

interface ElectricNameChangeRecord {
    id: string;
    oldName: string;
    newName: string;
    consumerId: string;
    cnic: string;
    requestDate: string;
    status: string;
}

interface ListProps {
    records: ElectricNameChangeRecord[];
    onDelete: (id: string) => void;
}

export default function NameChangeList({ records, onDelete }: ListProps) {
    const columns: Column<ElectricNameChangeRecord>[] = [
        {
            header: "Consumer ID",
            accessorKey: "consumerId",
            className: "font-semibold text-blue-600",
        },
        {
            header: "Current Name",
            accessorKey: "oldName",
        },
        {
            header: "Proposed Name",
            accessorKey: "newName",
            className: "text-green-600 font-medium",
        },
        {
            header: "CNIC",
            accessorKey: "cnic",
        },
        {
            header: "Date",
            accessorKey: "requestDate",
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: (row) => (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {row.status}
                </span>
            ),
        },
        {
            header: "Actions",
            cell: (row) => (
                <div className="flex gap-3">
                    <button
                        onClick={() => console.log("Process", row)}
                        className="text-purple-500 hover:text-purple-700 transition-colors"
                    >
                        <FaUserEdit size={16} />
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
                emptyMessage="No name change requests found."
            />
        </div>
    );
}
