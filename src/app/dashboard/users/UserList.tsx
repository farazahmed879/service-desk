"use client";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";
import Link from "next/link";
import type { UserList } from "@/app/dashboard/users/types";


import type { UserListProps } from "./types";

export default function UserList({ clients, onEdit, onDelete }: { clients: any[], onEdit: (client: any) => void, onDelete: (id: number) => void }) {
  // const [editingUser, setEditingUser] = useState<UserList | undefined>(
  //   undefined,
  // );



  return (
    <div className="grid overflow-x-auto overflow-y-visible rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        User List
      </h2>

      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-none uppercase text-dark dark:text-white [&>th]:text-center">
            <th className="min-w-[120px] py-3 !text-left">Full Name</th>
            <th className="py-3">father name</th>
            <th className="py-3">Email</th>
            <th className="py-3">CNIC</th>
            <th className="py-3">Age</th>
            <th className="py-3">role</th>
            <th className="min-w-[120px] text-center"></th>
          </tr>
        </thead>
        <tbody>
          {clients?.length === 0 ? (
            <tr>
              <td style={{ textAlign: "center" }}>No clients found</td>
            </tr>
          ) : (
            clients?.map((client: any) => (
              <tr
                key={client.id}
                className="border-b border-gray-200 text-center text-base font-medium text-dark hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
              >
                <td className="py-3 !text-left">{client.name}</td>
                <td className="py-3">{client.fatherName}</td>
                <td className="py-3">{client.email}</td>
                <td className="py-3">{client.cnic}</td>
                <td className="py-3">{client.Age}</td>
                <td className="py-3">{client.role}</td>

                <td className="relative flex justify-center gap-2 overflow-visible py-3">
                  {/* <button
                  onClick={() => onEdit(client)}
                  className="flex items-center justify-center rounded p-2 text-blue-600 transition hover:bg-blue-100"
                  title="Edit"
                >
                  <FaEdit />
                </button> */}

                  <button
                    onClick={() => onDelete(client.id)}
                    className="flex items-center justify-center rounded p-2 text-red-600 transition hover:bg-red-100"
                    title="Delete"
                  >
                    <FaTrash size={14} />
                  </button>
                  {/* 
                <div className="relative inline-block">
                  <button
                    onClick={() =>
                      setShowServiceFor(
                        showServiceFor === user.id ? null : user.id,
                      )
                    }
                    className="rounded p-2 text-gray-600 transition hover:bg-gray-100"
                  >
                    <FaEllipsisV />
                  </button>

                  {showServiceFor === user.id && (
                    <div className="absolute right-0 z-10 mt-1 w-32 rounded border bg-white shadow-lg">
                      <Link
                        href="./users/service"
                        className="block cursor-pointer whitespace-nowrap px-3 py-2 text-sm hover:bg-gray-100"
                        onClick={() => setShowServiceFor(null)}
                      >
                        Service
                      </Link>
                    </div>
                  )}
                </div> */}
                </td>
              </tr>
            ))
          )}

          {/* {users.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="py-4 text-center text-gray-500 dark:text-gray-400"
              >
                No users found
              </td>
            </tr>
          )} */}
        </tbody>
      </table>
    </div>
  );
}

