"use client";

import { FaTrash } from "react-icons/fa";
import { CustomButton } from "@/components/ui-elements/custom-button";
import DataTable, { type Column } from "@/components/_custom-components/DataTable/DataTable";
import { BirthCertificateData } from "@/app/users/types";

interface BirthCertificateListProps {
    records: BirthCertificateData[];
    onDelete: (id: string) => void;
    isLoading?: boolean;
}

export default function BirthCertificateList({ records, onDelete, isLoading }: BirthCertificateListProps) {
    const columns: Column<BirthCertificateData>[] = [
        {
            header: "Child Name",
            accessorKey: "childName",
            sortable: true,
        },
        {
            header: "Father Name",
            accessorKey: "fatherName",
        },
        {
            header: "Date of Birth",
            accessorKey: "dob",
        },
        {
            header: "Place of Birth",
            accessorKey: "placeOfBirth",
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
            <h2 className="mb-4 text-xl font-bold text-gray-700">Birth Certificate Applications</h2>
            <DataTable<BirthCertificateData>
                data={records}
                columns={columns}
                isLoading={isLoading}
                emptyMessage="No records found"
                rowKey={(row) => row.id}
            />
        </div>
    );
}
