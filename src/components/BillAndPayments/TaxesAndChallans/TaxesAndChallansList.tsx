"use client";
import React from "react";
import DataTable, { Column } from "@/components/_custom-components/DataTable/DataTable";
import { FaTrash, FaEye } from "react-icons/fa";
import type { BillAndPayment } from "@/app/users/types";

interface ListProps {
    records: BillAndPayment[];
    onDelete: (id: string) => void;
}

export default function TaxesAndChallansList({ records, onDelete }: ListProps) {
    const columns: Column<BillAndPayment>[] = [
        {
            header: "Invoice #",
            accessorKey: "InvoiceNumber",
            className: "font-semibold text-blue-600",
        },
        {
            header: "User Name",
            accessorKey: "userName",
        },
        {
            header: "Date",
            accessorKey: "paymentDate",
        },
        {
            header: "Amount",
            accessorKey: "amount",
            cell: (row) => <span className="text-green-600 font-bold">${row.amount}</span>,
        },
        {
            header: "Paid By",
            accessorKey: "paidBy",
        },
        {
            header: "Actions",
            cell: (row: any) => (
                <div className="flex gap-3">
                    <button
                        onClick={() => console.log("View", row)}
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                        title="View Details"
                    >
                        <FaEye size={16} />
                    </button>
                    <button
                        onClick={() => onDelete(row.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        title="Delete Record"
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
                emptyMessage="No tax or challan records found."
            />
        </div>
    );
}
