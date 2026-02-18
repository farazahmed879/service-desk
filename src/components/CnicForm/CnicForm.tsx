"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/_custom-components/InputField/InputField";
import type { CnicFormData } from "@/app/users/types";
import CNICList from "./cniclist";

import { getAll, create } from "@/services/crud_services";
import { FaPlus, FaUsers } from "react-icons/fa";

interface CnicFormProps {
  serviceType?: string;
}

export default function CnicForm({ serviceType = "new-Cnic" }: CnicFormProps) {
  const router = useRouter();

  const getTitle = () => {
    switch (serviceType) {
      case "renew-Cnic":
        return "Renew Cnic";
      case "lost-Cnic":
        return "Lost Cnic";
      default:
        return "New Cnic";
    }
  };
    const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, control, reset } = useForm<CnicFormData>({
    defaultValues: {
      userName: "",
      fullName: "",
      middleName: "",
      lastName: "",
      fatherName: "",
      dob: "",
      placeOfBirth: "",
      cnic: "",
      gender: "",
      contactNumber: "",
      email: "",
      currentAddress: "",
      permanentAddress: "",
      fatherCnicFront: null,
      fatherCnicBack: null,
      motherCnicFront: null,
      motherCnicBack: null,
      birthCertificate: null,
    },
  });

  const [cnic, setCnic] = useState<CnicFormData[]>(() => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("passports");
        return saved ? JSON.parse(saved) : [];
      }
      return [];
    });
    useEffect(() => {
      localStorage.setItem("New Cnic", JSON.stringify(cnic));
    }, [cnic]);

   
  const handleDelete = (id: string) => {
    setCnic(cnic.filter((p) => p.id !== id));
  };
 const onSubmit = (data: CnicFormData) => {
    const newCnic: CnicFormData = {
      ...data, 
      id: (cnic.length + 1).toString(),
      fullName: `${data.firstName || ""} ${data.middleName || ""} ${data.lastName || ""}`.trim(),
    };


    setCnic((prev) => [...prev, newCnic]);
  console.log("CNIC State after submit:", [...cnic, newCnic]);

    alert("CNIC Form submitted successfully!");
    reset();
    setShowForm(false);
  };



  const fetchAllCnic = async () => {
    try {
      const data = await getAll<CnicFormData>("https://dog.ceo/dog-api");
      setCnic(data);
    } catch (error) {
      console.error("Failed to fetch CNIC:", error);
    }
  };

  useEffect(() => {
    fetchAllCnic();
  }, []);
  const createCnic = async (cnicData: Partial<CnicFormData>) => {
    try {
      const newCnic = await create<CnicFormData>(
        "http://localhost:8080/services/PassportByCnic",
        cnicData,
      );

      setCnic((prev) => [...prev, newCnic]);

      console.log("Passport created successfully:", newCnic);
    } catch (error) {
      console.error("Failed to create passport:", error);
    }
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      {!showForm && (
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="mb-6 text-2xl font-bold text-gray-700">
              {getTitle()}
            </h1>

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
      <div className="mb-4 flex flex-col">
        <label className="mb-1 font-medium text-gray-700">User:</label>
        <input
          type="text"
          placeholder="User"
          {...register("userName")}
          className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>



      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {showForm && (
          <>
            <h1 className="mb-6 text-2xl font-bold text-gray-700">
              New CNIC Form
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <InputField
                label="Full Name"
                name="FullName"
                register={register}
                placeholder="Enter full name"
              />
              <InputField
                label="Father Name"
                name="FatherName"
                register={register}
                placeholder="Enter father name"
              />
              <InputField
                label="Date of Birth"
                name="DOB"
                register={register}
                type="date"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <InputField
                label="CNIC Number"
                name="CNIC"
                register={register}
                placeholder="Enter CNIC"
              />
              <InputField
                label="Gender"
                name="Gender"
                register={register}
                options={["Male", "Female", "Other"]}
              />
              <InputField
                label="Mobile"
                name="Mobile"
                register={register}
                placeholder="03XXXXXXXXX"
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              <InputField
                label="Address"
                name="Address"
                register={register}
                textarea
                rows={4}
                placeholder="Enter address"
              />
            </div>

            <h2 className="mt-6 text-xl font-semibold text-gray-700">
              Required Documents
            </h2>

            {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-gray-700">
                  Birth Certificate / Form-B
                </label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  {...register("birthCertificate")}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-700">
                  Father CNIC (Front)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("fatherCnicFront")}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-700">
                  Father CNIC (Back)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("fatherCnicBack")}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-700">
                  Mother CNIC (Front)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("motherCnicFront")}
                  className="w-full rounded-md border px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-700">
                  Mother CNIC (Back)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("motherCnicBack")}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>


            </div>

            <h2 className="mt-6 text-xl font-semibold text-gray-700">Biometrics</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-gray-700">Your Live Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  capture="user"
                  {...register("livePhoto")}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-700">Signature Image</label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("signatureImage")}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>
            </div> */}

            <div className="mt-6 flex w-full justify-end gap-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="w-40 rounded-lg bg-gray-500 py-2.5 font-semibold text-white hover:bg-gray-600"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white shadow transition-all hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
<CNICList
  cnics={cnic}          // ✅ matches prop name
  onDelete={handleDelete}
/>
    </div>
  );
}
