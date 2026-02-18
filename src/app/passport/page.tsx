"use client";
import { BrowserRouter } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputField from "@/components/_custom-components/InputField/InputField";
import PassportList from "./passportlist";
import { useSearchParams } from "next/navigation";

import { FaPlus, FaUsers } from "react-icons/fa";
import { getAll } from "@/services/crud_services";
import { PassportFormData, PassportType } from "../users/types";
import { urls } from "../utilities-services/api-urls";

export default function Passport() {
  const searchParams = useSearchParams();

  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  const [selectedPassport, setSelectedPassport] = useState<PassportType | null>(
    null,
  );
  const root = document.getElementById("root");

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

  const [passports, setPassports] = useState<PassportType[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("passports");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem("passports", JSON.stringify(passports));
  }, [passports]);
  const handleDelete = (id: string) => {
    setPassports(passports.filter((p) => p.id !== id));
  };

  const onSubmit = (data: PassportFormData) => {
    const newPassport: PassportType = {
      id: (passports.length + 1).toString(),
      userName: data.userName,
      firstName: data.FirstName,
      middleName: data.MiddleName,
      lastName: data.LastName,
      fullName: `${data.FirstName} ${data.MiddleName || ""} ${data.LastName}`,
      fatherName: data.FatherName,
      dob: data.DOB,
      placeOfBirth: data.PlaceOfBirth,
      cnic: data.CNIC,
      gender: data.Gender,
      contactNumber: data.ContactNumber,
      email: data.Email,
      currentAddress: data.CurrentAddress,
      permanentAddress: data.PermanentAddress,
      passportType: "Regular",
    };

    setPassports((prev) => [...prev, newPassport]);

    alert("Passport Form submitted successfully!");
    reset();
    setShowForm(false);
  };

  /*   const fetchAllPassports = async () => {
      try {
        const res = await getAll<PassportType>(urls.passport.getAll);
        if (!res) return;
  
        setPassports(res);
      } catch (err) {
        console.error("Failed to fetch passports:", err);
        setPassports([]);
      }
    };
  
  
    useEffect(() => {
      fetchAllPassports();
    }, []); */

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      {!showForm && (
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="mb-6 text-2xl font-bold text-gray-700">
              New Passport
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
              New Passport Application
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
      <hr className="my-6 border-gray-300" />

      <PassportList passports={passports} onDelete={handleDelete} />
    </div>
  );
}
