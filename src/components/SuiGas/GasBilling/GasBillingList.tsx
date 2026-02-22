"use client";
import React from "react";
import DataTable, { Column } from "@/components/_custom-components/DataTable/DataTable";
import { FaTrash, FaCheckCircle } from "react-icons/fa";

interface GasBillingRecord {
    id: string;
    userName: string;
    billMonth: string;
    amount: string;
    dueDate: string;
    status: string;
}

interface ListProps {
    records: GasBillingRecord[];
    onDelete: (id: string) => void;
}

export default function GasBillingList({ records, onDelete }: ListProps) {
    const columns: Column<GasBillingRecord>[] = [
        {
            header: "User Name",
            accessorKey: "userName",
        },
        {
            header: "Billing Month",
            accessorKey: "billMonth",
            className: "font-semibold text-blue-600",
        },
        {
            header: "Amount",
            accessorKey: "amount",
            cell: (row) => <span className="font-bold text-gray-800">Rs. {row.amount}</span>,
        },
        {
            header: "Due Date",
            accessorKey: "dueDate",
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: (row) => (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === "Paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                    {row.status}
                </span>
            ),
        },
        {
            header: "Actions",
            cell: (row) => (
                <div className="flex gap-3">
                    <button
                        onClick={() => console.log("Pay", row)}
                        className="text-green-500 hover:text-green-700 transition-colors"
                        title="Mark as Paid"
                    >
                        <FaCheckCircle size={16} />
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
                emptyMessage="No billing records found."
            />
        </div>
    );
}
