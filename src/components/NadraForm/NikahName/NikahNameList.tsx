"use client";

import { FaTrash } from "react-icons/fa";
import { CustomButton } from "@/components/ui-elements/custom-button";
import DataTable, { type Column } from "@/components/_custom-components/DataTable/DataTable";
import { NikahData } from "@/app/users/types";

interface NikahNameListProps {
    records: NikahData[];
    onDelete: (id: string) => void;
    isLoading?: boolean;
}

export default function NikahNameList({ records, onDelete, isLoading }: NikahNameListProps) {
    const columns: Column<NikahData>[] = [
        {
            header: "Husband Name",
            accessorKey: "husbandName",
            sortable: true,
        },
        {
            header: "Wife Name",
            accessorKey: "wifeName",
            sortable: true,
        },
        {
            header: "Marriage Date",
            accessorKey: "marriageDate",
        },
        {
            header: "Place",
            accessorKey: "place",
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
            <h2 className="mb-4 text-xl font-bold text-gray-700">Nikah Nama Applications</h2>
            <DataTable<NikahData>
                data={records}
                columns={columns}
                isLoading={isLoading}
                emptyMessage="No records found"
                rowKey={(row) => row.id}
            />
        </div>
    );
}
