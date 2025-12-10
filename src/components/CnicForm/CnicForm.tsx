"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";

export default function CnicForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("CNIC Form Submitted:", data);
    alert("CNIC Form submitted successfully!");
    window.location.reload();
  };

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-6 border border-gray-200">

      <div className="flex items-center gap-2 mb-4">
        <span className="font-medium text-gray-700">User:</span>
        <input
          type="text"
          placeholder="User"
          {...register("userName")}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
      </div>

      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        CNIC Application Form
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField label="Full Name" name="FullName" register={register} placeholder="Enter full name" />
          <InputField label="Father Name" name="FatherName" register={register} placeholder="Enter father name" />
          <InputField label="Date of Birth" name="DOB" register={register} type="date" />
          <InputField label="CNIC Number" name="CNIC" register={register} placeholder="Enter CNIC" />
          <InputField label="Gender" name="Gender" register={register} options={["Male", "Female", "Other"]} />
          <InputField label="Mobile" name="Mobile" register={register} placeholder="03XXXXXXXXX" />
          <InputField label="Address" name="Address" register={register} textarea rows={4} placeholder="Enter address" />
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">Required Documents</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div>
            <label className="block text-gray-700 mb-2">Birth Certificate / Form-B</label>
            <input
              type="file"
              accept="image/*,application/pdf"
              {...register("birthCertificate")}
              className="border border-gray-300 rounded-md w-full px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Father CNIC (Front)</label>
            <input
              type="file"
              accept="image/*"
              {...register("fatherCnicFront")}
              className="border rounded-md w-full px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Father CNIC (Back)</label>
            <input
              type="file"
              accept="image/*"
              {...register("fatherCnicBack")}
              className="border rounded-md w-full px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Mother CNIC (Front)</label>
            <input
              type="file"
              accept="image/*"
              {...register("motherCnicFront")}
              className="border rounded-md w-full px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Mother CNIC (Back)</label>
            <input
              type="file"
              accept="image/*"
              {...register("motherCnicBack")}
              className="border rounded-md w-full px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Utility Bill (Residence Proof)</label>
            <input
              type="file"
              accept="image/*,application/pdf"
              {...register("utilityBill")}
              className="border rounded-md w-full px-3 py-2"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">Biometrics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div>
            <label className="block text-gray-700 mb-2">Your Live Photo</label>
            <input
              type="file"
              accept="image/*"
              capture="user"
              {...register("livePhoto")}
              className="border rounded-md w-full px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Signature Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("signatureImage")}
              className="border rounded-md w-full px-3 py-2"
            />
          </div>
        </div>

   
        <div className="w-full flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={() => router.push("/dashboard/services")}
            className="w-40 bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-40 bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}




/* "use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";

export default function CnicForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const onSubmit = (data: any) => {
    console.log("CNIC Form Submitted:", data);
    alert("CNIC Form submitted successfully!");
          window.location.reload();

  };

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-6 border border-gray-200">
 <div className="flex items-center gap-2 mb-4">
  <span className="font-medium text-gray-700">User:</span>
  <input
    type="text"
    placeholder="User"
    {...register("userName")}
    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
  />
</div>
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        CNIC Application Form
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField label="Full Name" name="FullName" register={register} placeholder="Enter full name" />
          <InputField label="Father Name" name="FatherName" register={register} placeholder="Enter father name" />
          <InputField label="Date of Birth" name="DOB" register={register} type="date" />
          <InputField label="CNIC Number" name="CNIC" register={register} placeholder="Enter CNIC" />
          <InputField label="Gender" name="Gender" register={register} options={["Male", "Female", "Other"]} />
          <InputField label="Mobile" name="Mobile" register={register} placeholder="03XXXXXXXXX" />
          <InputField label="Address" name="Address" register={register} textarea rows={4} placeholder="Enter address" />
        </div>
        <div className="w-full flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push("/dashboard/services")}
            className="w-40 bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-40 bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </div>


      </form>
    </div>
  );
}
 */