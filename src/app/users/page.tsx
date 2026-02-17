"use client";

import { useState, useEffect, useMemo } from "react";
import UserList from "./UserList";
import { CustomButton } from "@/components/ui-elements/custom-button";
import { FaPlus } from "react-icons/fa";
import { getAllUser } from "@/services/clientCrud/getUserService";
import { UserType } from "./types";
import UserForm from "@/components/User/page";

const ITEMS_PER_PAGE = 10;

export default function UserPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<UserType | undefined>(
    undefined,
  );

  // ─── Pagination state ────────────────────────────────────────────
  const [currentPage, setCurrentPage] = useState(1);

  // ─── Sorting state ───────────────────────────────────────────────
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null,
  );

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const [clients, setClient] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getclient = async () => {
      try {
        const data = await getAllUser();
        setClient(data.data);
      } catch (error: any) {
        console.log(error.message || error);
      } finally {
        setLoading(false);
      }
    };

    getclient();
  }, []);

  // ─── Sorting logic ──────────────────────────────────────────────
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      // Toggle direction: asc → desc → null
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortColumn(null);
        setSortDirection(null);
      }
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
    setCurrentPage(1); // reset to first page on sort change
  };

  const sortedClients = useMemo(() => {
    if (!sortColumn || !sortDirection) return clients;

    return [...clients].sort((a, b) => {
      const aVal = String(a[sortColumn] ?? "").toLowerCase();
      const bVal = String(b[sortColumn] ?? "").toLowerCase();
      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [clients, sortColumn, sortDirection]);

  // ─── Pagination logic ───────────────────────────────────────────
  const totalPages = Math.max(
    1,
    Math.ceil(sortedClients.length / ITEMS_PER_PAGE),
  );
  const paginatedClients = sortedClients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // ─── CRUD handlers ─────────────────────────────────────────────
  const handleSave = (user: UserType) => {
    let updatedUsers;
    if (editingUser) {
      updatedUsers = users.map((u) => (u.id === user.id ? user : u));
    } else {
      updatedUsers = [user, ...users];
    }
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setShowForm(false);
    setEditingUser(undefined);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingUser(undefined);
  };

  const handleEdit = (user: UserType) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    const filteredUsers = users.filter((u) => u.id !== id);
    setUsers(filteredUsers);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            Users
          </h1>
          <span className="text-sm text-gray-500">
            Manage all registered users
          </span>
        </div>

        {!showForm && (
          <CustomButton
            onClick={() => setShowForm(true)}
            variant="gradient"
            leftIcon={<FaPlus size={14} />}
          >
            Add User
          </CustomButton>
        )}
      </div>

      {showForm ? (
        <UserForm
          onSave={handleSave}
          onCancel={handleCancel}
          existingUser={editingUser}
        />
      ) : (
        <UserList
          clients={paginatedClients}
          onEdit={handleEdit as any}
          onDelete={(id: number) => handleDelete(id)}
          isLoading={loading}
          pagination={{
            currentPage,
            totalPages,
            onPageChange: setCurrentPage,
          }}
          sorting={{
            sortColumn,
            sortDirection,
            onSort: handleSort,
          }}
        />
      )}
    </div>
  );
}
