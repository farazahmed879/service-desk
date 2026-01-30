"use client";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";
import Link from "next/link";
import type { UserList } from "@/app/dashboard/users/types";
import { getAllUser } from "@/services/clientCrud/getUserService";

import type { UserListProps } from "./types";

export default function UserList() {
  // const [editingUser, setEditingUser] = useState<UserList | undefined>(
  //   undefined,
  // );

  const [clients, setClient] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getclient = async () => {
      try {
        const data = await getAllUser();
        setClient(data.dat);
        console.log(clients);
        console.log(data);
      } catch (error: any) {
        console.log(error.message || error);
      } finally {
        setLoading(false);
      }
    };

    getclient();
  }, []);

  const [showServiceFor, setShowServiceFor] = useState<number | null>(null);
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
          {clients.length === 0 ? (
            <tr>
              <td style={{ textAlign: "center" }}>No clients found</td>
            </tr>
          ) : (
               clients.map((client: any) => (
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

                  {/* <button
                  onClick={() => onDelete(user.id)}
                  className="flex items-center justify-center rounded p-2 text-red-600 transition hover:bg-red-100"
                  title="Delete"
                >
                  <FaTrash size={14} />
                </button> */}
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

/* "use client";

import { useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cnic: string;
  age: string;
}

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}
interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
}
export default function UserList({ users, onEdit }: UserListProps) 

export default function UserList({
  users,
  onEdit,
  onDelete,
}: UserListProps) {
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);

  return (
    <div className="grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        User List
      </h2>

      <table className="min-w-full">
        <thead>
          <tr className="border-none uppercase text-dark dark:text-white text-center">
            <th className="py-3">Actions</th>
            <th className="min-w-[120px] !text-left py-3">First Name</th>
            <th className="py-3">Last Name</th>
            <th className="py-3">Email</th>
            <th className="py-3">CNIC</th>
            <th className="py-3">Age</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center border-t">
              <td className="py-3 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(user)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(user.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>

              <td className="!text-left py-3">{user.firstName}</td>
              <td className="py-3">{user.lastName}</td>
              <td className="py-3">{user.email}</td>
              <td className="py-3">{user.cnic}</td>
              <td className="py-3">{user.age}</td>
            </tr>
          ))}

          {users.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="text-center py-4 text-gray-500 dark:text-gray-400"
              >
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
} */

/* "use client";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cnic: string;
  age: string;
}

export default function UserList({ users }: { users: User[] }) {
  return (
    <div className="grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        User List
      </h2>

      <table className="min-w-full">
        <thead>
          <tr className="border-none uppercase [&>th]:text-center text-dark dark:text-white">
            <th className="min-w-[120px] !text-left py-3">First Name</th>
            <th className="py-3">Last Name</th>
            <th className="py-3">Email</th>
            <th className="py-3">CNIC</th>
            <th className="py-3">Age</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="text-center text-base font-medium text-dark dark:text-white border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td className="!text-left py-3">{user.firstName}</td>
              <td className="py-3">{user.lastName}</td>
              <td className="py-3">{user.email}</td>
              <td className="py-3">{user.cnic}</td>
              <td className="py-3">{user.age}</td>
            </tr>
          ))}

          {users.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="text-center py-4 text-gray-500 dark:text-gray-400"
              >
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
} */

/* "use client";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cnic: string;
  age: string;
}

export default function UserList({ users }: { users: User[] }) {
  return (
    <div className="grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        User List
      </h2>

      <table className="min-w-full">
        <thead>
          <tr className="border-none uppercase [&>th]:text-center text-dark dark:text-white">
            <th className="min-w-[120px] !text-left py-3">First Name</th>
            <th className="py-3">Last Name</th>
            <th className="py-3">Email</th>
            <th className="py-3">CNIC</th>
            <th className="py-3">Age</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, i) => (
            <tr
              key={user.id}
              className="text-center text-base font-medium text-dark dark:text-white border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td className="!text-left py-3">{user.firstName}</td>
              <td className="py-3">{user.lastName}</td>
              <td className="py-3">{user.email}</td>
              <td className="py-3">{user.cnic}</td>
              <td className="py-3">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} */

/* "use client";

import { useState, useEffect } from "react";
import UserForm from "./UserForm";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cnic: string;
  age: string;
  gender: string;
  passportNumber: string;
  passportIssue: string;
  passportExpiry: string;
  passportCountry: string;
  passportType: string;
  image: File | null;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleSave = (updatedUser: User) => {
    const updatedUsers = users.map((u) => (u.id === updatedUser.id ? updatedUser : u));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setEditingUser(null); 
  };

  return (
    <div className="p-6">
      {editingUser && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Edit User</h2>
          <UserForm
            existingUser={editingUser}
            onSave={handleSave}
          />
        </div>
      )}

      <ul className="space-y-3">
  {users.map((user, index) => (
    <li
      key={user.id ?? index} 
      className="p-3 border rounded-lg flex justify-between items-center"
    >
      <span>
        {index + 1}. {user.firstName} {user.lastName}
      </span>
      <button
        onClick={() => handleEdit(user)}
        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
      >
        Edit
      </button>
    </li>
  ))}
</ul>
    </div>
  );
} */

/* "use client";

import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(stored);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Registered Users</h2>

      <ul className="space-y-3">
  {users.map((user, index) => (
    <li key={user.id ?? index} className="p-3 border rounded-lg">
      {index + 1}. {user.firstName} {user.lastName}
    </li>
  ))}
</ul>
    </div>
  );
}
 */
