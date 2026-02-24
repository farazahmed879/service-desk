"use client";

import { FaTrash, FaEye } from "react-icons/fa";
import { CustomButton } from "@/components/ui-elements/custom-button";
import DataTable, {
  type Column,
} from "@/components/_custom-components/DataTable/DataTable";
import type { vehicle_Transfer } from "@/app/users/types";

interface VehicleTransferListProps {
  records: (vehicle_Transfer & { id: string })[];
  onDelete: (id: string) => void;
  isLoading?: boolean;
}

export default function VehicleTransferList({
  records,
  onDelete,
  isLoading,
}: VehicleTransferListProps) {
  const columns: Column<vehicle_Transfer & { id: string }>[] = [
    {
      header: "Reg #",
      accessorKey: "RegistrationNumber",
      sortable: true,
    },
    {
      header: "Current Owner",
      accessorKey: "currentOwnerName",
    },
    {
      header: "New Owner",
      accessorKey: "NewOwnerName",
    },
    {
      header: "Vehicle",
      cell: (row) => `${row.Make} ${row.Model}`,
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
        Vehicle Transfer List
      </h2>
      <DataTable<vehicle_Transfer & { id: string }>
        data={records}
        columns={columns}
        isLoading={isLoading}
        emptyMessage="No transfer records found"
        rowKey={(row) => row.id}
      />
    </div>
  );
}
