"use client";
import { useState, } from "react";

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



interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}
export default function UserList({ users, onEdit, onDelete }: UserListProps) {
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);

  return (
    <div className="grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        User List
      </h2>

      <table className="min-w-full">
        <thead>
          <tr className="border-none uppercase [&>th]:text-center text-dark dark:text-white">

            <th className="min-w-[120px] !text-left py-3"></th>
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

              <td className="py-3 flex justify-center gap-2">

                <button
                  onClick={() => onEdit(user)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-hover-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-hover-700"
                >
                  Delete
                </button>
              </td>

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



