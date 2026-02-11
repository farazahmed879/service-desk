"use client";

import React from "react";
import CnicForm from "@/components/CnicForm/CnicForm";

export default function CnicServicePage() {
  return (
    <div >
      <CnicForm />
    </div>
  );
}







/* "use client";

import { useForm } from "react-hook-form";

export default function CNICForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("CNIC Form Submitted:", data);
    alert("CNIC Form submitted successfully!");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full border border-gray-300 rounded-lg p-2"
          {...register("Full Name", { required: "Full Name is required" })}
        />
        {errors["Full Name"] && (
          <p className="text-red-500 text-sm">{String(errors["Full Name"]?.message)}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Father/Husband Name</label>
        <input
          type="text"
          placeholder="Enter father/husband name"
          className="w-full border border-gray-300 rounded-lg p-2"
          {...register("Father/Husband Name", { required: "Father/Husband Name is required" })}
        />
        {errors["Father/Husband Name"] && (
          <p className="text-red-500 text-sm">{String(errors["Father/Husband Name"]?.message)}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-green-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
*/

/* "use client";

import { useForm } from "react-hook-form";

export default function CNICForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("CNIC Application Submitted:", data);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">CNIC Application Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block font-medium">Full Name</label>
          <input
            {...register("fullName", { required: "Full Name is required" })}
            className="w-full border p-2 rounded"
            placeholder="Enter full name"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Father's Name</label>
          <input
            {...register("fatherName", { required: "Father name is required" })}
            className="w-full border p-2 rounded"
            placeholder="Enter father's name"
          />
          {errors.fatherName && (
            <p className="text-red-500">{errors.fatherName.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Mother's Name</label>
          <input
            {...register("motherName", { required: "Mother name is required" })}
            className="w-full border p-2 rounded"
            placeholder="Enter mother's name"
          />
          {errors.motherName && (
            <p className="text-red-500">{errors.motherName.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Date of Birth</label>
          <input
            type="date"
            {...register("dob", { required: "DOB is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="w-full border p-2 rounded"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500">{errors.gender.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Permanent Address</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className="w-full border p-2 rounded"
            placeholder="Enter permanent address"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Enter a valid 11-digit Pakistani phone number",
              },
            })}
            className="w-full border p-2 rounded"
            placeholder="03XXXXXXXXX"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Birth Certificate</label>
          <input
            type="file"
            {...register("birthCertificate", {
              required: "Birth certificate is required",
            })}
            className="w-full border p-2 rounded"
          />
          {errors.birthCertificate && (
            <p className="text-red-500">{errors.birthCertificate.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded mt-4"
        >
          Submit CNIC Application
        </button>
      </form>
    </div>
  );
}
 */ 