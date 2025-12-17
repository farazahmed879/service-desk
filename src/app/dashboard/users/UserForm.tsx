"use client";

import { useState, useEffect } from "react";

interface UserFormProps {
  existingUser?: any;
  onSave: (user: any) => void;
  onCancel: () => void;
}

export default function UserForm({ existingUser, onSave, onCancel }: UserFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cnic: "",
    age: "",
    gender: "",
    passportNumber: "",
    passportIssue: "",
    passportExpiry: "",
    passportCountry: "",
    passportType: "",
    image: null as File | null,
    id: Date.now(),
  });

  useEffect(() => {
    if (existingUser) setForm(existingUser);
  }, [existingUser]);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave(form);
  };

  
  return (
      
    <div className="w-full bg-white shadow-md rounded-xxl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        {existingUser ? "Edit User" : "User Registration"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">First Name</label>
            <input
              name="firstName"
              placeholder="Enter first name"
              value={form.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-60"
              required
            />
            {/* <input
  name="firstName"
  placeholder="Enter first name"
  value={form.firstName}
  onChange={handleChange}
  className="border border-gray-300 rounded-md px-2 py-1 text-sm w-40"
  required
/> */}
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Last Name</label>
            <input
              name="lastName"
              placeholder="Enter last name"
              value={form.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">CNIC</label>
            <input
              name="cnic"
              placeholder="Enter CNIC"
              value={form.cnic}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Age</label>
            <input
              name="age"
              type="number"
              min={1}
              placeholder="Enter age"
              value={form.age}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        {/* <h3 className="font-semibold pt-3">Passport Information</h3>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Passport Number</label>
          <input
            name="passportNumber"
            placeholder="Enter passport number"
            value={form.passportNumber}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Registration Date</label>
            <input
              type="date"
              name="passportIssue"
              value={form.passportIssue}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>

          {/* <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Passport Expiry Date</label>
            <input
              type="date"
              name="passportExpiry"
              value={form.passportExpiry}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div> */}

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Upload 
             Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        <div className="w-full flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="w-40 bg-gray-200 text-gray-800 font-semibold py-2.5 rounded-lg shadow hover:bg-gray-300 transition-all"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-40 bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            {existingUser ? "Save Changes" : "Register User"}
          </button>
        </div>
      </form>
    </div>
  );
}





/* "use client";

import { useState, useEffect } from "react";

interface UserFormProps {
  existingUser?: any;
  onSave: (user: any) => void;
}

export default function UserForm({ existingUser, onSave }: UserFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cnic: "",
    age: "",
    gender: "",
    passportNumber: "",
    passportIssue: "",
    passportExpiry: "",
    passportCountry: "",
    passportType: "",
    image: null as File | null,
    id: Date.now(),
  });

  useEffect(() => {
    if (existingUser) setForm(existingUser);
  }, [existingUser]);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4">{existingUser ? "Edit User" : "User Registration"}</h2>

      <div className="grid grid-cols-2 gap-4">
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="border p-3 rounded-xl w-full" />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={form.email}
          onChange={handleChange}
          className="border p-3 rounded-xl w-full"
          required
        />
        <input name="cnic" placeholder="CNIC" value={form.cnic} onChange={handleChange} className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="age"
          type="number"
          min={1}
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="border p-3 rounded-xl w-full"
        />
        <select name="gender" value={form.gender} onChange={handleChange} className="border p-3 rounded-xl w-full">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <h3 className="font-semibold pt-3">Passport Information</h3>

      <input name="passportNumber" placeholder="Passport Number" value={form.passportNumber} onChange={handleChange} className="border p-3 rounded-xl w-full" />

      <div className="grid grid-cols-2 gap-4">
        <input type="date" name="passportIssue" value={form.passportIssue} onChange={handleChange} className="border p-3 rounded-xl w-full" />
        <input type="date" name="passportExpiry" value={form.passportExpiry} onChange={handleChange} className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="passportCountry" placeholder="Passport Country" value={form.passportCountry} onChange={handleChange} className="border p-3 rounded-xl w-full" />
        <input name="passportType" placeholder="Passport Type" value={form.passportType} onChange={handleChange} className="border p-3 rounded-xl w-full" />
      </div>

      <div>
        <label className="font-medium">Upload Passport Image</label>
        <input type="file" name="image" accept="image/*" onChange={handleChange} className="mt-2 w-full" />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full mt-4 hover:bg-blue-700">
        {existingUser ? "Save Changes" : "Register User"}
      </button>
    </form>
  );
}
 */


/* "use client";

import { useState, useEffect } from "react";

interface UserFormProps {
  onSave: (user: any) => void;
}

export default function UserForm({ onSave }: UserFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cnic: "",
    age: "",
    gender: "",
    passportNumber: "",
    passportIssue: "",
    passportExpiry: "",
    passportCountry: "",
    passportType: "",
    image: null as File | null,
    id: Date.now(),
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave(form); // parent component ko notify kare
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4">User Registration</h2>

      <div className="grid grid-cols-2 gap-4">
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="border p-3 rounded-xl w-full" />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-3 rounded-xl w-full" />
        <input name="cnic" placeholder="CNIC" value={form.cnic} onChange={handleChange} className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="age" placeholder="Age" value={form.age} onChange={handleChange} className="border p-3 rounded-xl w-full" />
        <select name="gender" value={form.gender} onChange={handleChange} className="border p-3 rounded-xl w-full">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full mt-4 hover:bg-blue-700">
        Add User
      </button>
    </form>
  );
} */





/* "use client";
import { useState, useEffect } from "react";

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

 const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave(form); // pass form back to parent
  };

export default function UserForm({ editingUser, onSave }: UserFormProps) {
  const [form, setForm] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    cnic: "",
    age: "",
    gender: "",
    passportNumber: "",
    passportIssue: "",
    passportExpiry: "",
    passportCountry: "",
    passportType: "",
    image: null,
    id: Date.now(),
  });

  // Populate form if editingUser is provided
  useEffect(() => {
    if (editingUser) {
      setForm(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const oldUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if (editingUser) {
      // Update existing user
      const updatedUsers = oldUsers.map((u: User) =>
        u.id === editingUser.id ? form : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      alert("User Updated Successfully!");
    } else {
      // Add new user
      const newUser = { ...form, id: Date.now() + Math.random() };
      oldUsers.unshift(newUser);
      localStorage.setItem("users", JSON.stringify(oldUsers));
      alert("User Registered Successfully!");
    }

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      cnic: "",
      age: "",
      gender: "",
      passportNumber: "",
      passportIssue: "",
      passportExpiry: "",
      passportCountry: "",
      passportType: "",
      image: null,
      id: Date.now(),
    });

    if (onSave) onSave(); // optional callback
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4">
        {editingUser ? "Edit User" : "User Registration"}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
        <input name="cnic" placeholder="CNIC" value={form.cnic} onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="age" placeholder="Age" value={form.age} onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
        <select name="gender" value={form.gender} onChange={handleChange} className="border p-3 rounded-xl w-full">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <h3 className="font-semibold pt-3">Passport Information</h3>

      <input name="passportNumber" placeholder="Passport Number" value={form.passportNumber} onChange={handleChange}
        className="border p-3 rounded-xl w-full" />

      <div className="grid grid-cols-2 gap-4">
        <input type="date" name="passportIssue" value={form.passportIssue} onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
        <input type="date" name="passportExpiry" value={form.passportExpiry} onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="passportCountry" placeholder="Passport Country" value={form.passportCountry} onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
        <input name="passportType" placeholder="Passport Type" value={form.passportType} onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
      </div>

      <div>
        <label className="font-medium">Upload Passport Image</label>
        <input type="file" name="image" accept="image/*" onChange={handleChange}
          className="mt-2 w-full" />
      </div>

      <button type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full mt-4 hover:bg-blue-700">
        {editingUser ? "Save Changes" : "Register User"}
      </button>
    </form>
  );
} */


/* "use client";

import { useState } from "react";

export default function UserForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cnic: "",
    age: "",
    gender: "",
    passportNumber: "",
    passportIssue: "",
    passportExpiry: "",
    passportCountry: "",
    passportType: "",
    image: null as File | null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Fetch old users from localStorage
    const oldUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Push new user
    oldUsers.push({
      ...form,
      id: Date.now(),
    });

    // Save updated list
    localStorage.setItem("users", JSON.stringify(oldUsers));

    alert("User Registered Successfully!");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">

      <h2 className="text-xl font-bold mb-4">User Registration</h2>

      <div className="grid grid-cols-2 gap-4">
        <input name="firstName" placeholder="First Name" onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
        <input name="lastName" placeholder="Last Name" onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="email" placeholder="Email" onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
        <input name="cnic" placeholder="CNIC" onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="age" placeholder="Age" onChange={handleChange}
          className="border p-3 rounded-xl w-full" />

        <select name="gender" onChange={handleChange} className="border p-3 rounded-xl w-full">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <h3 className="font-semibold pt-3">Passport Information</h3>

      <input name="passportNumber" placeholder="Passport Number" onChange={handleChange}
        className="border p-3 rounded-xl w-full" />

      <div className="grid grid-cols-2 gap-4">
        <input type="date" name="passportIssue" onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
        <input type="date" name="passportExpiry" onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="passportCountry" placeholder="Passport Country" onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
        <input name="passportType" placeholder="Passport Type" onChange={handleChange}
          className="border p-3 rounded-xl w-full" />
      </div>

      <div>
        <label className="font-medium">Upload Passport Image</label>
        <input type="file" name="image" accept="image/*" onChange={handleChange}
          className="mt-2 w-full" />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full mt-4 hover:bg-blue-700"
      >
        Register User
      </button>
    </form>
  );
}
 */

/* "use client";

import { useState } from "react";

export default function UserForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cnic: "",
    age: "",
    gender: "",
    passportNumber: "",
    passportIssue: "",
    passportExpiry: "",
    passportCountry: "",
    passportType: "",
    image: null as File | null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const oldUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = { ...form, id: Date.now() };

    oldUsers.unshift(newUser); // <-- Add new user at beginning
    localStorage.setItem("users", JSON.stringify(oldUsers));

    alert("User Registered Successfully!");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4">User Registration</h2>

      <div className="grid grid-cols-2 gap-4">
        <input name="firstName" placeholder="First Name" onChange={handleChange} className="border p-3 rounded-xl w-full" />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="email" placeholder="Email" onChange={handleChange} className="border p-3 rounded-xl w-full" />
        <input name="cnic" placeholder="CNIC" onChange={handleChange} className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="age" placeholder="Age" onChange={handleChange} className="border p-3 rounded-xl w-full" />
        <select name="gender" onChange={handleChange} className="border p-3 rounded-xl w-full">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <h3 className="font-semibold pt-3">Passport Information</h3>

      <input name="passportNumber" placeholder="Passport Number" onChange={handleChange} className="border p-3 rounded-xl w-full" />

      <div className="grid grid-cols-2 gap-4">
        <input type="date" name="passportIssue" onChange={handleChange} className="border p-3 rounded-xl w-full" />
        <input type="date" name="passportExpiry" onChange={handleChange} className="border p-3 rounded-xl w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="passportCountry" placeholder="Passport Country" onChange={handleChange} className="border p-3 rounded-xl w-full" />
        <input name="passportType" placeholder="Passport Type" onChange={handleChange} className="border p-3 rounded-xl w-full" />
      </div>

      <div>
        <label className="font-medium">Upload Passport Image</label>
        <input type="file" name="image" accept="image/*" onChange={handleChange} className="mt-2 w-full" />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full mt-4 hover:bg-blue-700">
        Register User
      </button>
    </form>
  );
}
 */