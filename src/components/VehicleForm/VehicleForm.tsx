import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputField from "@/components/InputFields/InputField";
import type { vehicle_form } from "@/app/dashboard/users/types";
import { getAll } from "@/app/services/crud_services";
import { useEffect } from "react";
import { FaPlus, FaUsers } from "react-icons/fa";

export default function VehicleRegistrationService() {
  const router = useRouter();
  const [Vehicle, setVehicle] = useState<vehicle_form[]>([]);
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, control, reset } = useForm<vehicle_form>({
    defaultValues: {
      userName: "",
      ownerName: "",
      cnic: "",
      contactNumber: "",
      vehicleMake: "",
      vehicleModel: "",
      year: "",
      registrationNumber: "",
      address: "",
    },
  });

  const onSubmit = (data: vehicle_form) => {
    console.log("Form Submitted:", data);
    alert(" Vehicle Form submitted successfully!");
    reset();
  };

  const fetchAllvehicles = async () => {
    try {
      const data = await getAll<vehicle_form>("https://dog.ceo/dog-api");
      setVehicle(data);
    } catch (error) {
      console.error("failed to fetch the Vehicle");
    }
  };
  useEffect(() => {
    fetchAllvehicles();
  }, []);

  return (

    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      {!showForm && (
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="mb-6 text-2xl font-bold text-gray-700">
              Vehicle Registration  Service
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

            {/* <button
              type="button"
              className="flex items-center gap-1 rounded-md
                  bg-blue-600 px-3 py-2 text-xs font-medium text-white
                  hover:bg-blue-700 active:scale-95"
            >
              <FaUsers size={12} />
              Get All Clients
            </button> */}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {showForm && (
          <>
        <h2 className="mb-4 text-2xl font-semibold">
          Vehicle Registration Form
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InputField
            label="Owner Full Name"
            name="ownerName"
            register={register}
            placeholder="Enter full name"
          />
          <InputField
            label="CNIC Number"
            name="cnic"
            register={register}
            placeholder="Enter CNIC"
          />
          <InputField
            label="Contact Number"
            name="contactNumber"
            register={register}
            placeholder="03XXXXXXXXX"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InputField
            label="Vehicle Make"
            name="vehicleMake"
            register={register}
            placeholder="Enter vehicle make"
          />
          <InputField
            label="Vehicle Model"
            name="vehicleModel"
            register={register}
            placeholder="Enter vehicle model"
          />
          <InputField
            label="Year of Manufacture"
            name="year"
            register={register}
            type="number"
            placeholder="Enter year"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InputField
            label="Vehicle Registration Number"
            name="registrationNumber"
            register={register}
            placeholder="Enter registration number"
          />
          <InputField
            label="Address"
            name="address"
            register={register}
            textarea
            rows={3}
            placeholder="Enter address"
          />
        </div>

        <div className="flex w-full justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push("/dashboard/services")}
            className="w-40 rounded-lg bg-blue-600 py-2.5 font-semibold text-white shadow transition-all hover:bg-blue-700"
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
    </div>
  );
}
