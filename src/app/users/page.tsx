"use client";

import { useState, useEffect, useMemo } from "react";
import UserList from "./UserList";
import { FaPlus } from "react-icons/fa";
import { getAllUser } from "@/services/clientCrud/getUserService";
import { UserType } from "./types";
import UserForm from "@/components/User/page";

import Api from "@/utils/api";
import { urls } from "../utilities-services/api-urls";
// import { useState } from "react"
import { FaTimes } from "react-icons/fa"
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
  // ________________________getCLient By email

  const [email, setEmail] = useState<string>();
  const [data, setdata] = useState<any>();
  const [showclient, setShowClient] = useState<any>(false);

  const getclient = async () => {
    try {
      const response = await Api.post(urls.client.get, { email: email });

      if (response) {
        console.log(response.data);
        setdata(response.data.data);
        setShowClient(true);
      }
    } catch (error: any) {
      console.log(error.response.data);
      alert(` code ${error.response.status} , ${error.response.data} `);
      setShowClient(false);
    }
  };

  const  close =()=>{
    setShowClient(false)
  }
  // ________________________getCLient By email

  return (
    <div>
      <div className="mb-6 flex items-center justify-between rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            Client
          </h1>
        </div>
        <div className="search flex gap-1">
          <input
            className="rounded border p-2 pl-4"
            type="email"
            placeholder="client@gmail.com"
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          <button
            onClick={getclient}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow transition-all hover:from-blue-700 hover:to-blue-600 active:scale-95"
          >
            Search
          </button>
        </div>

        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow transition-all hover:from-blue-700 hover:to-blue-600 active:scale-95"
          >
            <FaPlus size={14} />
            Add Client
          </button>
        )}

       
      </div>

             {showclient && data && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-96 rounded-xl bg-white p-6 shadow-lg">
           
            <button
               onClick={close}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">
              <FaTimes />
            </button>

            {/* Modal content */}
            <div className="flex flex-col gap-2">
              <h6 className="font-semibold text-lg">{data.email}</h6>
              <p>Name: {data.name}</p>
              <p>Role: {data.role}</p>
              <p>mother: {data.motherName}</p>
              <p>father: {data.fatherName}</p>
              <p>cnic: {data.cnic}</p>
              <p>dob: {data.Gender}</p>
              <p>city: {data.city}</p>
              <p>country: {data.coutry}</p>
              <p>postal: {data.postalCode}</p>
              <p>address: {data.permenentAddress}</p>
              <img src={data.facePicture} alt="" />
            </div>
          </div>
        </div>
      )}
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
