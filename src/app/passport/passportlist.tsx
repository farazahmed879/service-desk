"use client";

import { FaTrash } from "react-icons/fa";
import { CustomButton } from "@/components/ui-elements/custom-button";
import DataTable, {
  type Column,
  type PaginationProps,
  type SortingProps,
} from "@/components/_custom-components/DataTable/DataTable";
import { PassportFormData, PassportType } from "../users/types";

interface PassportListProps {
  passports: PassportType[];
  onEdit?: (passport: PassportType) => void;
  onDelete: (id: string) => void;
  pagination?: any;
  sorting?: any;
  isLoading?: boolean;
}

export default function PassportList({
  passports,
  onEdit,
  onDelete,
  pagination,
  sorting,
  isLoading,
}: PassportListProps) {
  const columns: Column<PassportType>[] = [
    {
      header: "Full Name",
      accessorKey: "fullName",
      sortable: true,
      headerClassName: "!text-left",
      className: "!text-left",
    },
    {
      header: "Father Name",
      accessorKey: "fatherName",
      sortable: true,
    },

    {
      header: "CNIC",
      accessorKey: "cnic",
    },
    {
      header: "Age",
      accessorKey: "age",
      sortable: true,
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "",
      cell: (row) => (
        <div className="flex justify-center gap-2">
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
      headerClassName: "min-w-[120px] text-center",
    },
  ];

  return (
    <div className="grid overflow-x-auto overflow-y-visible rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Passport List
      </h2>

      <DataTable<PassportType>
        data={passports}
        columns={columns}
        pagination={pagination}
        sorting={sorting}
        isLoading={isLoading}
        emptyMessage="No passports found"
        rowKey={(row) => row.id}
      />
    </div>
  );
}
