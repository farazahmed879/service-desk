"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import DataTable, {
  type Column,
  type PaginationProps,
  type SortingProps,
} from "@/components/_custom-components/DataTable/DataTable";

interface Client {
  id: number;
  name: string;
  fatherName: string;
  email: string;
  cnic: string;
  Age: string;
  role: string;
}

interface UserListProps {
  clients: Client[];
  onEdit: (client: Client) => any;
  onDelete: (id: number) => any;
  pagination?: PaginationProps;
  sorting?: SortingProps;
  isLoading?: boolean; 
}

export default function UserList({ 
  clients,
  onEdit,
  onDelete,
  pagination,
  sorting,
  isLoading,
}: UserListProps) {
  const columns: Column<Client>[] = [
    {
      header: "Full Name",
      accessorKey: "name",
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
      header: "Email",
      accessorKey: "email",
      sortable: true,
    },
    {
      header: "CNIC",
      accessorKey: "cnic",
    },
    {
      header: "Age",
      accessorKey: "Age",
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
          <button
            onClick={() => onDelete(row.id)}
            className="flex items-center justify-center rounded p-2 text-red-600 transition hover:bg-red-100"
            title="Delete"
          >
            <FaTrash size={14} />
          </button>
        </div>
      ),
      headerClassName: "min-w-[120px] text-center",
    },
  ];

  return (
    <div className="grid overflow-x-auto overflow-y-visible rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        User List
      </h2>

      <DataTable<Client>
        data={clients}
        columns={columns}
        pagination={pagination}
        sorting={sorting}
        isLoading={isLoading}
        emptyMessage="No clients found"
        rowKey={(row) => row.id}
      />
    </div>
  );
}
