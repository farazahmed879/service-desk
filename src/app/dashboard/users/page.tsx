"use client";

import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { getAllUser } from "@/services/clientCrud/getUserService";
import { UserType } from "@/app/users/types";
import UserForm from "@/components/User/page";
import UserList from "@/app/users/UserList";

export default function UserPage() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [editingUser, setEditingUser] = useState<UserType | undefined>(undefined);


    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
        setUsers(storedUsers);
    }, []);

    const [clients, setClient] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getclient = async () => {
            try {
                //todo: wrong you need to call getAllUser from the UserList component and generic get all service
                const data = await getAllUser();
                setClient(data.data);
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
        <div >
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
                <UserList clients={clients} onEdit={(id: any) => handleEdit(id)} onDelete={(id: number) => handleDelete(id)} />
            )}
        </div>
    );
}

