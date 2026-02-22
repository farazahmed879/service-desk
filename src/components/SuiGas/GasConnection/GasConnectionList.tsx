"use client";
import React from "react";
import DataTable, { Column } from "@/components/_custom-components/DataTable/DataTable";
import { FaTrash, FaEye } from "react-icons/fa";

interface GasConnectionRecord {
    id: string;
    userName: string;
    consumerNumber: string;
    applicationDate: string;
    status: string;
    address: string;
}

interface ListProps {
    records: GasConnectionRecord[];
    onDelete: (id: string) => void;
}

export default function GasConnectionList({ records, onDelete }: ListProps) {
    const columns: Column<GasConnectionRecord>[] = [
        {
            header: "User Name",
            accessorKey: "userName",
            className: "font-semibold text-blue-600",
        },
        {
            header: "Consumer #",
            accessorKey: "consumerNumber",
        },
        {
            header: "Date",
            accessorKey: "applicationDate",
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: (row) => (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {row.status}
                </span>
            ),
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
                emptyMessage="No gas connection records found."
            />
        </div>
    );
}
