"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputFields/InputField";

export default function PassportForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();


  const onSubmit = (data: any) => {
    console.log("Passport Form Submitted:", data);
    alert("Passport Form submitted successfully!");
    window.location.reload
  };

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <div className="flex flex-col mb-4">
  <label className="font-medium text-gray-700 mb-1">User:</label>

  <input
    type="text"
    placeholder="User"
    {...register("userName")}
    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
  />
</div>
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        Passport Application Form
      </h1>

     <form 
  onSubmit={(e) => {
    e.preventDefault();              // default form submit rok do
    handleSubmit(onSubmit)(e);       // react-hook-form validation
    window.location.reload();         // page reload
  }} 
  className="space-y-6"
>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <InputField label="First Name" name="FirstName" register={register} placeholder="First Name"  />
          <InputField label="Middle Name" name="MiddleName" register={register} placeholder="Middle Name" />
          <InputField label="Last Name" name="LastName" register={register} placeholder="Last Name" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <InputField label="Father/Husband Name" name="FatherName" register={register} placeholder="Enter father/husband name" />
          <InputField label="Date of Birth" name="DOB" register={register} type="date" />
          <InputField label="Place of Birth" name="PlaceOfBirth" register={register} placeholder="Enter place of birth" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <InputField label="CNIC/NICOP Number" name="CNIC" register={register} placeholder="Enter CNIC/NICOP Number" />
          <InputField label="Gender" name="Gender" register={register} options={["Male", "Female", "Other"]} />
          <InputField label="Contact Number" name="ContactNumber" register={register} placeholder="Enter contact number" type="tel" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <InputField label="Email" name="Email" register={register} placeholder="Enter email" type="email" />
          <InputField label="Current Address" name="CurrentAddress" register={register} textarea rows={4} placeholder="Enter your current address" />
          <InputField label="Permanent Address" name="PermanentAddress" register={register} textarea rows={4} placeholder="Enter your permanent address" />
        </div>
        <h2 className="text-xl font-semibold text-gray-700 mt-6">Required Documents</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

         {/*  <div>
            <label className="block text-gray-700 mb-2">Birth Certificate / Form-B</label>
            <input
              type="file"
              accept="image/*,application/pdf"
              {...register("birthCertificate")}
              className="border border-gray-300 rounded-md w-full px-3 py-2"
            />
          </div> */}

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

          {/* <div>
            <label className="block text-gray-700 mb-2">Utility Bill (Residence Proof)</label>
            <input
              type="file"
              accept="image/*,application/pdf"
              {...register("utilityBill")}
              className="border rounded-md w-full px-3 py-2"
            />
          </div> */}
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



/* "use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields/InputField";

export default function PassportForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log("Passport Form Submitted:", data);
        alert("Passport Form submitted successfully!");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputField label="First Name" name="FirstName" register={register} placeholder="First Name" />
        <InputField label="Middle Name" name="MiddleName" register={register} placeholder="Middle Name" />
        <InputField label="Last Name" name="LastName" register={register} placeholder="Last Name" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputField label="Father/Husband Name" name="FatherName" register={register} placeholder="Enter father/husband name" />
        <InputField label="Date of Birth" name="DOB" register={register} type="date" />
        <InputField label="Place of Birth" name="PlaceOfBirth" register={register} placeholder="Enter place of birth" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputField label="CNIC/NICOP Number" name="CNIC" register={register} placeholder="Enter CNIC/NICOP Number" />
        <InputField label="Gender" name="Gender" register={register} options={["Male", "Female", "Other"]} />
        <InputField label="Contact Number" name="ContactNumber" register={register} placeholder="Enter contact number" type="tel" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputField label="Email" name="Email" register={register} placeholder="Enter email" type="email" />
        <InputField label="Current Address" name="CurrentAddress" register={register} textarea rows={4} placeholder="Enter your current address" />
        <InputField label="Permanent Address" name="PermanentAddress" register={register} textarea rows={4} placeholder="Enter your permanent address" />
      </div>

      <div className="mt-2 w-full flex justify-end">
        <button
          type="submit"
          className="w-32 bg-green-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>

    </form>
    );
} */


/* "use client";

import { useForm } from "react-hook-form";

export default function PassportForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Passport Form Submitted:", data);
    alert("Passport Form submitted successfully!");
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
      
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
          {...register("FullName", { required: "Full Name is required" })}
        />
        {errors.FullName && (
          <p className="text-red-500 text-sm mt-1">{String(errors.FullName.message)}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Father/Husband Name</label>
        <input
          type="text"
          placeholder="Enter father/husband name"
          className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
          {...register("FatherName", { required: "Father/Husband Name is required" })}
        />
        {errors.FatherName && (
          <p className="text-red-500 text-sm mt-1">{String(errors.FatherName.message)}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Date of Birth</label>
        <input
          type="date"
          className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
          {...register("DOB", { required: "Date of Birth is required" })}
        />
        {errors.DOB && (
          <p className="text-red-500 text-sm mt-1">{String(errors.DOB.message)}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Place of Birth</label>
        <input
          type="text"
          placeholder="Enter place of birth"
          className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
          {...register("PlaceOfBirth", { required: "Place of Birth is required" })}
        />
        {errors.PlaceOfBirth && (
          <p className="text-red-500 text-sm mt-1">{String(errors.PlaceOfBirth.message)}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">CNIC/NICOP Number</label>
        <input
          type="text"
          placeholder="Enter CNIC/NICOP Number"
          className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
          {...register("CNIC", { required: "CNIC/NICOP is required" })}
        />
        {errors.CNIC && (
          <p className="text-red-500 text-sm mt-1">{String(errors.CNIC.message)}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Gender</label>
        <select
          className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
          {...register("Gender", { required: "Gender is required" })}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.Gender && (
          <p className="text-red-500 text-sm mt-1">{String(errors.Gender.message)}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Contact Number</label>
        <input
          type="tel"
          placeholder="Enter contact number"
          className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
          {...register("ContactNumber", { required: "Contact Number is required" })}
        />
        {errors.ContactNumber && (
          <p className="text-red-500 text-sm mt-1">{String(errors.ContactNumber.message)}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter email address"
          className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
          {...register("Email", { required: "Email is required" })}
        />
        {errors.Email && (
          <p className="text-red-500 text-sm mt-1">{String(errors.Email.message)}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Current Address</label>
        <textarea
          placeholder="Enter your current address"
          className="border border-gray-300 rounded-lg p-2 w-full max-w-md h-24"
          {...register("CurrentAddress", { required: "Current Address is required" })}
        />
        {errors.CurrentAddress && (
          <p className="text-red-500 text-sm mt-1">{String(errors.CurrentAddress.message)}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Permanent Address</label>
        <textarea
          placeholder="Enter your permanent address"
          className="border border-gray-300 rounded-lg p-2 w-full max-w-md h-24"
          {...register("PermanentAddress", { required: "Permanent Address is required" })}
        />
        {errors.PermanentAddress && (
          <p className="text-red-500 text-sm mt-1">{String(errors.PermanentAddress.message)}</p>
        )}
      </div>

      <div className="col-span-1 md:col-span-2">
        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>

    </form>
  );
} */




/* "use client";
import { useForm } from "react-hook-form";

export default function PassportForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fields = [
    { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter full name" },
    { name: "fatherName", label: "Father's Name", type: "text" },
    { name: "cnicNumber", label: "CNIC Number", type: "text" },
    { name: "dob", label: "Date of Birth", type: "date" },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: ["Male", "Female"]
    },
    { name: "email", label: "Email", type: "email" },
    { name: "photo", label: "Upload Photo", type: "file" }
  ];

  const onSubmit = (data: any) => {
    console.log("Passport Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      {fields.map((f) => (
        <div key={f.name}>
          <label className="block mb-1">{f.label}</label>

          {f.type === "select" ? (
            <select
              {...register(f.name, { required: `${f.label} is required` })}
              className="w-full border p-2 rounded"
            >
              <option value="">Select {f.label}</option>
              {f.options?.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type={f.type}
              {...register(f.name, { required: `${f.label} is required` })}
              placeholder={f.placeholder}
              className="w-full border p-2 rounded"
            />
          )}

          {errors[f.name] && (
            <p className="text-red-500 text-sm">
              {(errors[f.name]?.message as string) || ""}
            </p>
          )}
        </div>
      ))}

      <button className="bg-blue-600 text-white p-2 rounded">Submit</button>
    </form>
  );
}
 */