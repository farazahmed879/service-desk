"use client";

import { FaTrash, FaEye } from "react-icons/fa";
import { CustomButton } from "@/components/ui-elements/custom-button";
import DataTable, {
  type Column,
} from "@/components/_custom-components/DataTable/DataTable";
import type { BillAndPayment } from "@/app/users/types";

interface TaxPaymentListProps {
  records: BillAndPayment[];
  onDelete: (id: string) => void;
  isLoading?: boolean;
}

export default function TaxPaymentList({
  records,
  onDelete,
  isLoading,
}: TaxPaymentListProps) {
  const columns: Column<BillAndPayment>[] = [
    {
      header: "Invoice Number",
      accessorKey: "InvoiceNumber",
      sortable: true,
    },
    {
      header: "Date",
      accessorKey: "paymentDate",
    },
    {
      header: "Amount",
      accessorKey: "amount",
    },
    {
      header: "Paid By",
      accessorKey: "paidBy",
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
            onClick={() => row.id && onDelete(row.id)}
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
      <h2 className="mb-4 text-xl font-bold text-gray-700">Tax Payment List</h2>
      <DataTable<BillAndPayment>
        data={records}
        columns={columns}
        isLoading={isLoading}
        emptyMessage="No tax payment records found"
        rowKey={(row) => row.id || Math.random().toString()}
      />
    </div>
  );
}
