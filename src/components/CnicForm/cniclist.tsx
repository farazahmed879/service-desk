"use client";

import { FaTrash } from "react-icons/fa";
import { CustomButton } from "@/components/ui-elements/custom-button";
import type { CnicFormData } from "@/app/users/types";
import DataTable, { type Column } from "@/components/_custom-components/DataTable/DataTable";

interface CnicListProps {
  cnics: CnicFormData[];
  onDelete: (id: string) => void;
  pagination?: any;
  sorting?: any;
  isLoading?: boolean;
}

export default function CNICList({  //Idhr Masla he form ke bad information show nhi ho rhi 
  cnics,
  onDelete,
  pagination,
  sorting,
  isLoading,
}:CnicListProps) {
  const columns: Column<CnicFormData>[] = [
    {
      header: "Full Name",
      accessorKey: "fullName",
      sortable: true,
      cell: (info) => info.fullName, 
    },
    {
      header: "Father Name",
      accessorKey: "fatherName",
      sortable: true,
      cell: (info) => info.fatherName,
    },
    {
      header: "Email",
      accessorKey: "email",
      sortable: true,
      cell: (info) => info.email,
    },
    {
      header: "CNIC",
      accessorKey: "cnic",
      cell: (info) => info.cnic,
    },
    {
      header: "Contact",
      accessorKey: "contactNumber",
      cell: (info) => info.contactNumber,
    },
    {
      header: "",
      cell: (info) => (
        <div className="flex justify-center gap-2">
          <CustomButton
            variant="danger"
            size="icon"
            onClick={() => onDelete(info.id)}
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
        CNIC List
      </h2>

      <DataTable<CnicFormData>
        data={cnics}                    
        columns={columns}
        pagination={pagination}
        sorting={sorting}
        isLoading={isLoading}
        emptyMessage="No CNIC records found"
        rowKey={(row) => row.id}         
      />
    </div>
  );
}
