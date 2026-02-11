import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputField from "@/components/InputField/InputField";
import type { vehicle_form } from "@/app/dashboard/users/types";
import { getAll } from "@/services/crud_services";
import { useEffect } from "react";
export default function VehicleRegistrationService() {
  const router = useRouter();
  const [Vehicle, setVehicle] = useState<vehicle_form[]>([]);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-xl bg-white p-6 shadow-md"
    >
      <div className="mb-4 flex flex-col">
        <label className="mb-1 font-medium text-gray-700">User:</label>

        <input
          type="text"
          placeholder="User"
          {...register("userName")}
          className="w-64 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <h2 className="mb-4 text-2xl font-semibold">Vehicle Registration Form</h2>

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
    </form>
  );
}
