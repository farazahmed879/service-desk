"use client";
import React from "react";
import DataTable, { Column } from "@/components/_custom-components/DataTable/DataTable";
import { FaTrash, FaInfoCircle } from "react-icons/fa";

interface ElectricMeterChangeRecord {
    id: string;
    userName: string;
    consumerId: string;
    meterNumber: string;
    reason: string;
    requestDate: string;
    status: string;
}

interface ListProps {
    records: ElectricMeterChangeRecord[];
    onDelete: (id: string) => void;
}

export default function MeterChangeList({ records, onDelete }: ListProps) {
    const columns: Column<ElectricMeterChangeRecord>[] = [
        {
            header: "User Name",
            accessorKey: "userName",
        },
        {
            header: "Consumer ID",
            accessorKey: "consumerId",
            className: "font-semibold text-blue-600",
        },
        {
            header: "Meter #",
            accessorKey: "meterNumber",
        },
        {
            header: "Reason",
            accessorKey: "reason",
        },
        {
            header: "Date",
            accessorKey: "requestDate",
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: (row) => (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {row.status}
                </span>
            ),
        },
        {
            header: "Actions",
            cell: (row) => (
                <div className="flex gap-3">
                    <button
                        onClick={() => console.log("Details", row)}
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                        <FaInfoCircle size={16} />
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
                emptyMessage="No meter change requests found."
            />
        </div>
    );
}
