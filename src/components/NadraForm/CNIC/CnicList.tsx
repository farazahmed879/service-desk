"use client";

import { FaTrash } from "react-icons/fa";
import { CustomButton } from "@/components/ui-elements/custom-button";
import DataTable, { type Column } from "@/components/_custom-components/DataTable/DataTable";
import { CnicFormData } from "@/app/users/types";

interface CnicListProps {
    records: CnicFormData[];
    onDelete: (id: string) => void;
    isLoading?: boolean;
}

export default function CnicList({ records, onDelete, isLoading }: CnicListProps) {
    const columns: Column<CnicFormData>[] = [
        {
            header: "Full Name",
            accessorKey: "fullName",
            sortable: true,
        },
        {
            header: "Father Name",
            accessorKey: "fatherName",
        },
        {
            header: "CNIC Number",
            accessorKey: "cnic",
        },
        {
            header: "Mobile",
            accessorKey: "contactNumber",
        },
        {
            header: "Gender",
            accessorKey: "gender",
        },
        {
            header: "Actions",
            cell: (row) => (
                <div className="flex justify-center">
                    <CustomButton
                        variant="danger"
                        size="icon"
                        onClick={() => onDelete(row.id)}
                        title="Delete"
                    >
                        <FaTrash size={14} />
                    </CustomButton>
                </div>
            ),
            headerClassName: "text-center",
        },
    ];

    return (
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-bold text-gray-700">CNIC Applications</h2>
            <DataTable<CnicFormData>
                data={records}
                columns={columns}
                isLoading={isLoading}
                emptyMessage="No CNIC applications found"
                rowKey={(row) => row.id}
            />
        </div>
    );
}
