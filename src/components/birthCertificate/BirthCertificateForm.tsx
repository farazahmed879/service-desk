"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";
import { useRouter } from "next/navigation";

export default function BirthCertificateForm() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = (data: any) => {
        console.log("Birth Certificate Data:", data);
        alert("Your Birth Certificate request submitted successfully!");
              window.location.reload();

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
           <div className="flex items-center gap-2 mb-4">
  <span className="font-medium text-gray-700">User:</span>
  <input
    type="text"
    placeholder="User"
    {...register("userName")}
    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
  />
</div>
            <h2 className="text-2xl font-semibold mb-4">Birth Certificate</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <InputField label="Child Full Name" name="ChildName" register={register} placeholder="Child Full Name" />
                <InputField label="Date of Birth" name="DOB" type="date" register={register} placeholder="Date of Birth" />
                <InputField label="Place of Birth" name="PlaceOfBirth" register={register} placeholder="Place of Birth" />
                <InputField label="Gender" name="Gender" register={register} placeholder="Male / Female" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <InputField label="Father Name" name="FatherName" register={register} placeholder="Father Name" />
                <InputField label="Mother Name" name="MotherName" register={register} placeholder="Mother Name" />
                <InputField label="Father CNIC" name="FatherCNIC" register={register} placeholder="Father CNIC" />
                <InputField label="Mother CNIC" name="MotherCNIC" register={register} placeholder="Mother CNIC" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <InputField label="Parent Contact Number" name="ParentMobile" register={register}  placeholder="Parent Contact Number"/>
                <InputField label="Address" name="Address" register={register}  placeholder="Address"/>
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
    );
}
