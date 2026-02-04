"use client";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputField from "@/components/InputFields/InputField";
import type { PassportFormData, Passport } from "@/app/dashboard/users/types";

import { FaPlus, FaUsers } from "react-icons/fa";
import { getAll } from "@/services/crud_services";
import { urls } from "../api-urls";

export default function PassportForm() {
  const router = useRouter();
  const [passports, setPassports] = useState<Passport[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedPassport, setSelectedPassport] = useState<Passport | null>(
    null,
  );

  const { register, handleSubmit, control, reset } = useForm<PassportFormData>({
    defaultValues: {
      userName: "",
      FirstName: "",
      MiddleName: "",
      LastName: "",
      FatherName: "",
      DOB: "",
      PlaceOfBirth: "",
      CNIC: "",
      Gender: "",
      ContactNumber: "",
      Email: "",
      CurrentAddress: "",
      PermanentAddress: "",
      fatherCnicFront: null,
      fatherCnicBack: null,
      motherCnicFront: null,
      motherCnicBack: null,
    },
  });

  const onSubmit = (data: PassportFormData) => {
    console.log("Passport Form Submitted:", data);
    alert("Passport Form submitted successfully!");
    reset();
  };

  /* const fetchAllPassports = async () => {
    try {
      const res = await getAll<Passport>(urls.passport.getAll);
      if (!res) return;

      setPassports(res);
    } catch (err) {
      console.error("Failed to fetch passports:", err);
      setPassports([]);
    }
  }; */

  const fetchAllPassports = async () => {
    try {
      const res = await getAll<Passport>(urls.passport.getAll);
      if (!res) return;

      setPassports(res);
    } catch (err) {
      console.error("Failed to fetch passports:", err);
      setPassports([]);
    }
  };

  /*   const fetchAllPassports = async () => {
    try {
      const res = await fetch("http://localhost:5000/passport/get-all");
      if (!res.ok) throw new Error("Failed to fetch");

      const result = await res.json();

      setPassports(result.data || []);
    } catch (err) {
      console.error("Failed to fetch passports:", err);
      setPassports([]);
    }
  }; */

  useEffect(() => {
    fetchAllPassports();
  }, []);

  /*   const createPassport = async (passportData: Partial<Passport>) => {
    try {
      const newPassport = await create<Passport>(
        "http://localhost:8080/services/PassportByCnic",
        passportData,
      );

      setPassports((prev) => [...prev, newPassport]);

      console.log("Passport created successfully:", newPassport);
    } catch (error) {
      console.error("Failed to create passport:", error);
    }
  }; */

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      {!showForm && (
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="mb-6 text-2xl font-bold text-gray-700">
              Passport Service
            </h1>
            <label className="mb-1 font-medium text-gray-700">User :</label>
            <input
              type="text"
              placeholder="User"
              {...register("userName")}
              className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="flex items-center gap-1 rounded-md bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700 active:scale-95"
            >
              <FaPlus size={12} />
              Create
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 rounded-md bg-white shadow">
        {passports.length === 0 ? (
          <p className="p-4 text-gray-500">No passports found</p>
        ) : (
          passports.map((passport, index) => (
            <div
              key={passport.cnic + "-" + index}
              className="flex justify-between border-b p-4 hover:bg-gray-50"
            >
              <div>
                <p className="font-semibold">
                  {passport.firstName} {passport.lastName}
                </p>
                <p className="text-sm text-gray-600">CNIC: {passport.cnic}</p>
              </div>

              <button
                onClick={() => setSelectedPassport(passport)}
                className="text-sm text-blue-600"
              >
                View
              </button>
            </div>
          ))
        )}
      </div>

      {selectedPassport && (
        <div className="mt-4 rounded-md border bg-gray-50 p-4">
          <h2 className="mb-2 font-semibold">Passport Details</h2>
          <p>
            <strong>Name:</strong> {selectedPassport.firstName}{" "}
            {selectedPassport.lastName}
          </p>
          <p>
            <strong>CNIC:</strong> {selectedPassport.cnic}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {showForm && (
          <>
            <h1 className="mb-6 text-2xl font-bold text-gray-700">
              Passport Application Form
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <InputField
                label="First Name"
                name="FirstName"
                register={register}
                placeholder="First Name"
              />
              <InputField
                label="Middle Name"
                name="MiddleName"
                register={register}
                placeholder="Middle Name"
              />
              <InputField
                label="Last Name"
                name="LastName"
                register={register}
                placeholder="Last Name"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <InputField
                label="Father/Husband Name"
                name="FatherName"
                register={register}
                placeholder="Father/Husband Name"
              />
              <InputField
                label="Date of Birth"
                name="DOB"
                type="date"
                register={register}
                placeholder="Date of Birth"
              />
              <InputField
                label="Place of Birth"
                name="PlaceOfBirth"
                register={register}
                placeholder="Place of Birth"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <InputField
                label="CNIC Number"
                name="CNIC"
                register={register}
                registerOptions={{
                  required: "CNIC number is required",
                  pattern: {
                    value: /^\d{5}-\d{7}-\d$/,
                    message: "CNIC must be in format 12345-1234567-1",
                  },
                }}
                inputProps={{
                  maxLength: 15,
                  inputMode: "numeric",
                  placeholder: "12345-1234567-1",
                }}
              />

              <InputField
                label="Gender"
                name="Gender"
                register={register}
                options={["Male", "Female", "Other"]}
              />

              <InputField
                label="Contact Number"
                name="ContactNumber"
                type="tel"
                register={register}
                placeholder="Contact Number"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <InputField
                label="Father/Husband Name"
                name="FatherName"
                register={register}
                placeholder="Father/Husband Name"
              />
              <InputField
                label="Date of Birth"
                name="DOB"
                type="date"
                register={register}
                placeholder="Date of Birth"
              />
              <InputField
                label="Place of Birth"
                name="PlaceOfBirth"
                register={register}
                placeholder="Place of Birth"
              />
            </div>

            <h2 className="mt-6 text-xl font-semibold text-gray-700">
              Required Documents
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                "fatherCnicFront",
                "fatherCnicBack",
                "motherCnicFront",
                "motherCnicBack",
              ].map((field) => (
                <div key={field}>
                  <label className="mb-2 block text-gray-700">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <Controller
                    name={field as keyof PassportFormData}
                    control={control}
                    render={({ field }) => (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                        className="w-full rounded-md border px-3 py-2"
                      />
                    )}
                  />
                </div>
              ))}
            </div>

            <div className="flex w-full justify-end gap-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="w-40 rounded-lg bg-gray-500 py-2.5 font-semibold text-white hover:bg-gray-600"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

/* return (
  <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
    <h1 className="mb-6 text-2xl font-bold text-gray-700">
      Passport Application Form
    </h1>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">User :</label>
          <input type="text" placeholder="User" {...register("userName")} className="w-64 rounded-md border
           border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-1 rounded-md
               bg-blue-600 px-3 py-2 text-xs font-medium text-white
               hover:bg-blue-700 active:scale-95"
          >
            <FaPlus size={12} />
            Create
          </button>

          <button
            className="flex items-center gap-1 rounded-md
              bg-blue-600 px-3 py-2 text-xs font-medium text-white
               hover:bg-blue-700 active:scale-95"
          >
            <FaUsers size={12} />

            Get All Clients
          </button>
        </div>
      </div>


      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <InputField
          label="First Name"
          name="FirstName"
          register={register}
          placeholder="First Name"
        />
        <InputField
          label="Middle Name"
          name="MiddleName"
          register={register}
          placeholder="Middle Name"
        />
        <InputField
          label="Last Name"
          name="LastName"
          register={register}
          placeholder="Last Name"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <InputField
          label="Father/Husband Name"
          name="FatherName"
          register={register}
          placeholder="Father/Husband Name"
        />
        <InputField
          label="Date of Birth"
          name="DOB"
          type="date"
          register={register}
          placeholder="Date of Birth"
        />
        <InputField
          label="Place of Birth"
          name="PlaceOfBirth"
          register={register}
          placeholder="Place of Birth"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <InputField
          label="CNIC Number"
          name="CNIC"
          register={register}
          registerOptions={{
            required: "CNIC number is required",
            pattern: {
              value: /^\d{5}-\d{7}-\d$/,
              message: "CNIC must be in format 12345-1234567-1",
            },
          }}
          inputProps={{
            maxLength: 15,
            inputMode: "numeric",
            placeholder: "12345-1234567-1",
          }}
        />
        <InputField
          label="Gender"
          name="Gender"
          register={register}
          placeholder="Gender"
          options={["Male", "Female", "Other"]}
        />
        <InputField
          label="Contact Number"
          name="ContactNumber"
          type="tel"
          register={register}
          placeholder="Contact Number"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <InputField
          label="Email"
          name="Email"
          type="email"
          register={register}
          placeholder="Email"
        />
        <InputField
          label="Current Address"
          name="CurrentAddress"
          textarea
          rows={4}
          register={register}
          placeholder="Current Address"
        />
        <InputField
          label="Permanent Address"
          name="PermanentAddress"
          textarea
          rows={4}
          register={register}
          placeholder="Permanent Address"
        />
      </div>

      <h2 className="mt-6 text-xl font-semibold text-gray-700">
        Required Documents
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {[
          "fatherCnicFront",
          "fatherCnicBack",
          "motherCnicFront",
          "motherCnicBack",
        ].map((field) => (
          <div key={field}>
            <label className="mb-2 block text-gray-700">
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <Controller
              name={field as keyof PassportFormData}
              control={control}
              render={({ field }) => (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                  className="w-full rounded-md border px-3 py-2"
                />
              )}
            />
          </div>
        ))}
      </div>

      <div className="flex w-full justify-end gap-4">
        <button
          type="button"
          onClick={() => router.push("/dashboard/services")}
          className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
);
}
*/

//Main Code Passport Form
/* "use client";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import InputField from "@/components/InputFields/InputField";
import type { PassportFormData, Passport } from "@/app/dashboard/users/types";
import { getAll, create } from "@/services/crud_services";

export default function PassportForm() {
  const router = useRouter();
  const [passports, setPassports] = useState<Passport[]>([]);

  const { register, handleSubmit, control, reset } = useForm<PassportFormData>({
    defaultValues: {
      userName: "",
      FirstName: "",
      MiddleName: "",
      LastName: "",
      FatherName: "",
      DOB: "",
      PlaceOfBirth: "",
      CNIC: "",
      Gender: "",
      ContactNumber: "",
      Email: "",
      CurrentAddress: "",
      PermanentAddress: "",
      fatherCnicFront: null,
      fatherCnicBack: null,
      motherCnicFront: null,
      motherCnicBack: null,
    },
  });

  const onSubmit = (data: PassportFormData) => {
    console.log("Passport Form Submitted:", data);
    alert("Passport Form submitted successfully!");
    reset();
  };

  const BASE_URL = "http://localhost:8080";

  const fetchAllPassports = async () => {
    try {
      const data = await getAll<Passport>(
        "http://localhost:8080/services/allPassport",
      );

      setPassports(data);
    } catch (error) {
      console.error("Failed to fetch passports:", error);
    }
  };

  useEffect(() => {
    fetchAllPassports();
  }, []);

  const createPassport = async (passportData: Partial<Passport>) => {
    try {
      const newPassport = await create<Passport>(
        "http://localhost:8080/services/PassportByCnic",
        passportData,
      );

      setPassports((prev) => [...prev, newPassport]);

      console.log("Passport created successfully:", newPassport);
    } catch (error) {
      console.error("Failed to create passport:", error);
    }
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-gray-700">
        Passport Application Form
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-4 flex flex-col">
          <label className="mb-1 font-medium text-gray-700">User</label>
          <input
            type="text"
            placeholder="User"
            {...register("userName")}
            className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <InputField
            label="First Name"
            name="FirstName"
            register={register}
            placeholder="First Name"
          />
          <InputField
            label="Middle Name"
            name="MiddleName"
            register={register}
            placeholder="Middle Name"
          />
          <InputField
            label="Last Name"
            name="LastName"
            register={register}
            placeholder="Last Name"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <InputField
            label="Father/Husband Name"
            name="FatherName"
            register={register}
            placeholder="Father/Husband Name"
          />
          <InputField
            label="Date of Birth"
            name="DOB"
            type="date"
            register={register}
            placeholder="Date of Birth"
          />
          <InputField
            label="Place of Birth"
            name="PlaceOfBirth"
            register={register}
            placeholder="Place of Birth"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <InputField
            label="CNIC Number"
            name="CNIC"
            register={register}
            registerOptions={{
              required: "CNIC number is required",
              pattern: {
                value: /^\d{5}-\d{7}-\d$/,
                message: "CNIC must be in format 12345-1234567-1",
              },
            }}
            inputProps={{
              maxLength: 15,
              inputMode: "numeric",
              placeholder: "12345-1234567-1",
            }}
          />
          <InputField
            label="Gender"
            name="Gender"
            register={register}
            placeholder="Gender"
            options={["Male", "Female", "Other"]}
          />
          <InputField
            label="Contact Number"
            name="ContactNumber"
            type="tel"
            register={register}
            placeholder="Contact Number"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <InputField
            label="Email"
            name="Email"
            type="email"
            register={register}
            placeholder="Email"
          />
          <InputField
            label="Current Address"
            name="CurrentAddress"
            textarea
            rows={4}
            register={register}
            placeholder="Current Address"
          />
          <InputField
            label="Permanent Address"
            name="PermanentAddress"
            textarea
            rows={4}
            register={register}
            placeholder="Permanent Address"
          />
        </div>

        <h2 className="mt-6 text-xl font-semibold text-gray-700">
          Required Documents
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            "fatherCnicFront",
            "fatherCnicBack",
            "motherCnicFront",
            "motherCnicBack",
          ].map((field) => (
            <div key={field}>
              <label className="mb-2 block text-gray-700">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <Controller
                name={field as keyof PassportFormData}
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    className="w-full rounded-md border px-3 py-2"
                  />
                )}
              />
            </div>
          ))}
        </div>

        <div className="flex w-full justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push("/dashboard/services")}
            className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

/* "use client";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputFields/InputField";
import type { PassportFormData } from "@/app/dashboard/users/types";



export default function PassportForm() {
 const router = useRouter();

 const { register, handleSubmit, control, reset } = useForm<PassportFormData>({
   defaultValues: {
     userName: "",
     FirstName: "",
     MiddleName: "",
     LastName: "",
     FatherName: "",
     DOB: "",
     PlaceOfBirth: "",
     CNIC: "",
     Gender: "",
     ContactNumber: "",
     Email: "",
     CurrentAddress: "",
     PermanentAddress: "",
     fatherCnicFront: null,
     fatherCnicBack: null,
     motherCnicFront: null,
     motherCnicBack: null,
   },
 });

 const onSubmit = (data: PassportFormData) => {
   console.log("Passport Form Submitted:", data);
   alert("Passport Form submitted successfully!");
   reset();
 };

 
 return (
   <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
     <div className="mb-4 flex flex-col">
       <label className="mb-1 font-medium text-gray-700">User</label>
       <input
         type="text"
         placeholder="User"
         {...register("userName")}
         className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
     </div>

     <h1 className="mb-6 text-2xl font-bold text-gray-700">
       Passport Application Form
     </h1>

     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
       <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
         <InputField
           label="First Name"
           name="FirstName"
           register={register}
           placeholder="First Name"
         />
         <InputField
           label="Middle Name"
           name="MiddleName"
           register={register}
           placeholder="Middle Name"
         />
         <InputField
           label="Last Name"
           name="LastName"
           register={register}
           placeholder="Last Name"
         />
       </div>

       <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
         <InputField
           label="Father/Husband Name"
           name="FatherName"
           register={register}
           placeholder="Father/Husband Name"
         />
         <InputField
           label="Date of Birth"
           name="DOB"
           type="date"
           register={register}
           placeholder="Date of Birth"
         />
         <InputField
           label="Place of Birth"
           name="PlaceOfBirth"
           register={register}
           placeholder="Place of Birth"
         />
       </div>

       <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
         <InputField
           label="CNIC Number"
           name="CNIC"
           register={register}
           registerOptions={{
             required: "CNIC number is required",
             pattern: {
               value: /^\d{5}-\d{7}-\d$/,
               message: "CNIC must be in format 12345-1234567-1",
             },
           }}
           inputProps={{
             maxLength: 15,
             inputMode: "numeric",
             placeholder: "12345-1234567-1",
           }}
         />
         <InputField
           label="Gender"
           name="Gender"
           register={register}
           placeholder="Gender"
           options={["Male", "Female", "Other"]}
         />
         <InputField
           label="Contact Number"
           name="ContactNumber"
           type="tel"
           register={register}
           placeholder="Contact Number"
         />
       </div>

       <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
         <InputField
           label="Email"
           name="Email"
           type="email"
           register={register}
           placeholder="Email"
         />
         <InputField
           label="Current Address"
           name="CurrentAddress"
           textarea
           rows={4}
           register={register}
           placeholder="Current Address"
         />
         <InputField
           label="Permanent Address"
           name="PermanentAddress"
           textarea
           rows={4}
           register={register}
           placeholder="Permanent Address"
         />
       </div>

       <h2 className="mt-6 text-xl font-semibold text-gray-700">
         Required Documents
       </h2>

       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
         <div>
           <label className="mb-2 block text-gray-700">
             Father CNIC (Front)
           </label>

           <Controller
             name="fatherCnicFront"
             control={control}
             render={({ field }) => (
               <input
                 type="file"
                 accept="image/*"
                 onChange={(e) => field.onChange(e.target.files?.[0])}
                 className="w-full rounded-md border px-3 py-2"
               />
             )}
           />
         </div>

         <div>
           <label className="mb-2 block text-gray-700">
             Father CNIC (Back)
           </label>
           <Controller
             name="fatherCnicBack"
             control={control}
             render={({ field }) => (
               <input
                 type="file"
                 accept="image/*"
                 onChange={(e) => field.onChange(e.target.files?.[0])}
                 className="w-full rounded-md border px-3 py-2"
               />
             )}
           />
         </div>

         <div>
           <label className="mb-2 block text-gray-700">
             Mother CNIC (Front)
           </label>
           <Controller
             name="motherCnicFront"
             control={control}
             render={({ field }) => (
               <input
                 type="file"
                 accept="image/*"
                 onChange={(e) => field.onChange(e.target.files?.[0])}
                 className="w-full rounded-md border px-3 py-2"
               />
             )}
           />
         </div>

         <div>
           <label className="mb-2 block text-gray-700">
             Mother CNIC (Back)
           </label>
           <Controller
             name="motherCnicBack"
             control={control}
             render={({ field }) => (
               <input
                 type="file"
                 accept="image/*"
                 onChange={(e) => field.onChange(e.target.files?.[0])}
                 className="w-full rounded-md border px-3 py-2"
               />
             )}
           />
         </div>
       </div>

       <div className="flex w-full justify-end gap-4">
         <button
           type="button"
           onClick={() => router.push("/dashboard/services")}
           className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700"
         >
           Cancel
         </button>

         <button
           type="submit"
           className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700"
         >
           Submit
         </button>
       </div>
     </form>
   </div>
 );
} */

/* "use client";

import { useEffect, useState } from "react";
import { getAll } from "@/app/services/crud_services";
import type { DogImage } from "@/app/dashboard/users/types";

export default function DogsPage() {
  const [dogs, setDogs] = useState<DogImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDogs = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAll();
      setDogs(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch dog images");
    } finally {
      setLoading(false);
    }  
  };   

  useEffect(() => {
    fetchDogs();
  }, []);   

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Random Dog Image</h1>
      <div className="flex flex-col items-center gap-4">
        {dogs.map((dog, index) => (
          <img
            key={index}
            src={dog.message}
            alt="Random Dog"
            className="h-64 w-64 rounded-lg object-cover shadow-md"
          />  
        ))}  
      </div>  

      <button
        onClick={fetchDogs}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >  
        Fetch New Dog
      </button>  
    </div>  
  );  
} */
