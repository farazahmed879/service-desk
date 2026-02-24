"use client";

import { FaTrash, FaEye } from "react-icons/fa";
import { CustomButton } from "@/components/ui-elements/custom-button";
import DataTable, {
  type Column,
} from "@/components/_custom-components/DataTable/DataTable";
import type { vehicle_form } from "@/app/users/types";

interface RegistrationListProps {
  records: (vehicle_form & { id: string })[];
  onDelete: (id: string) => void;
  isLoading?: boolean;
}

export default function RegistrationList({
  records,
  onDelete,
  isLoading,
}: RegistrationListProps) {
  const columns: Column<vehicle_form & { id: string }>[] = [
    {
      header: "Owner Name",
      accessorKey: "ownerName",
      sortable: true,
    },
    {
      header: "Vehicle",
      cell: (row) => `${row.vehicleMake} ${row.vehicleModel}`,
    },
    {
      header: "Reg #",
      accessorKey: "registrationNumber",
    },
    {
      header: "Year",
      accessorKey: "year",
    },
    {
      header: "Actions",
      cell: (row) => (
        <div className="flex justify-center gap-2">
          <button className="rounded-full p-2 text-blue-600 transition-colors hover:bg-blue-50">
            <FaEye size={16} />
          </button>
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
      <h2 className="mb-4 text-xl font-bold text-gray-700">
        Registration List
      </h2>
      <DataTable<vehicle_form & { id: string }>
        data={records}
        columns={columns}
        isLoading={isLoading}
        emptyMessage="No registration records found"
        rowKey={(row) => row.id}
      />
    </div>
  );
}
