"use client";

import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { FaPlus } from "react-icons/fa";
import type { User } from "./types"; 


export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);


  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  },[]);

  const handleSave = (user: User) => {
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

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    const filteredUsers = users.filter((u) => u.id !== id);
    setUsers(filteredUsers);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
  };

  return (
    <div className="space-y-6 p-6">
      <div className="mb-6 flex items-center justify-between rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg">
        <div className="flex flex-col">
          <h1 className="font- text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            Users
          </h1>
          <span className="text-sm text-gray-500">
            Manage all registered users
          </span>
        </div>

        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow transition-all hover:from-blue-700 hover:to-blue-600 active:scale-95"
          >
            <FaPlus size={14} />
            Add User
          </button>
        )}
      </div>

      {showForm ? (
        <UserForm
          onSave={handleSave}
          onCancel={handleCancel}
          existingUser={editingUser}
        />
      ) : (
        <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
}

/* "use client";

import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

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
const [editingUser, setEditingUser] = useState<User | undefined>(undefined);

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleSave = (user: User) => {
    const updatedUsers = [user, ...users];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };
  const handleEdit = (user: User) => {
  setEditingUser(user);
  setShowForm(true);
};
const handleDelete = (id: number) => {
  const updatedUsers = users.filter((u) => u.id !== id);
  setUsers(updatedUsers);
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold"></h2>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add User
          </button>
        )}
      </div>

      {showForm ? (
        <UserForm
          onSave={handleSave}
          onCancel={handleCancel} 
            existingUser={editingUser}

        />
      ) : (
        <UserList users={users}
  onDelete={handleDelete}
           onEdit={handleEdit}

         />
      )}
    </div>
  );
} */

/* "use client";

import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

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

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleSave = (user: User) => {
    const updatedUsers = [user, ...users];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold"></h2>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add User
          </button>
        )}
      </div>

      {showForm ? (
        <UserForm
          onSave={handleSave}
          existingUser={undefined}
  onCancel={handleCancel} 

        />
      ) : (
        <UserList users={users} />
      )}
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

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleSave = (user: User) => {
    const updatedUsers = [user, ...users];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setShowForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Users</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      {showForm && (
        <div className="mb-6">
          <UserForm onSave={handleSave} />
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 border">First Name</th>
              <th className="px-4 py-2 border">Last Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">CNIC</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2 border">{user.firstName}</td>
                <td className="px-4 py-2 border">{user.lastName}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.cnic}</td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
} */
/* import UserForm from "./UserForm";
import UserList from "./UserList";

export default function UserPage() {
  return (
    <div className="flex gap-6 p-6">
      <div className="w-2/3">
        <UserForm />
      </div>

      <div className="w-1/3">
        <UserList />
      </div>
    </div>
  );
}
 */
