"use client";

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import { FormValues, UserFormProps } from "@/app/users/types";
import axios from "axios";
import { urls } from "@/app/utilities-services/api-urls";
import Api from "@/utils/api";
export default function UserForm({
  existingUser,
  onSave,
  onCancel,
}: UserFormProps) {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      role: "",
      name: "",
      fatherName: "",
      motherName: "",
      religion: "",
      email: "",
      cnic: "",
      Age: "",
      Gender: "",
      contact: "",
      permenentAddress: "",
      city: "",
      country: "",
      postalCode: "",
      birthDate: "",
      emergencyContactNumber: "",
    },
  });

  useEffect(() => {
    if (existingUser) {
      reset(existingUser);
    }
  }, [existingUser, reset]);

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("role", data.role);
      formData.append("fatherName", data.fatherName);
      formData.append("motherName", data.motherName);
      formData.append("religion", data.religion);
      formData.append("Age", data.Age);
      formData.append("email", data.email);
      formData.append("cnic", data.cnic);
      formData.append("Gender", data.Gender);
      formData.append("contact", data.contact);
      formData.append("permenentAddress", data.permenentAddress);
      formData.append("city", data.city);
      formData.append("country", data.country);
      formData.append("postalCode", data.postalCode);
      formData.append("birthDate", data.birthDate);
      formData.append("emergencyContactNumber", data.emergencyContactNumber);

      if (data.facePicture && data.facePicture[0]) {
        formData.append("facePicture", data.facePicture[0]);
      }

      const response = await Api.post(urls.client.create, formData);

      if (response) {
        alert("User Form submitted successfully!");
        console.log("User Form Submitted:", response.data);
      }

      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data);
      console.log(error.response.status);
      alert(
        ` status ${error.response.status} error: ${error.response.data.message}`,
      );

      return error.response;
    }

    reset();
  };

  return (
    <div className="w-full rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold">
        {existingUser ? "edit User" : "Register Client"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex gap-4">
          <InputField
            label="Name"
            name="name"
            placeholder="Enter Name"
            register={register}
            registerOptions={{ required: "Name is required" }}
            error={errors.name}
          />
          <InputField
            label="Role"
            name="role"
            placeholder="Enter Role"
            register={register}
            registerOptions={{ required: "role is required" }}
            error={errors.role}
          />
        </div>
        <div className="flex gap-4">
          <InputField
            label="Father Name"
            name="fatherName"
            placeholder="Enter your Father Name"
            register={register}
            registerOptions={{ required: "father Name is required" }}
            error={errors.fatherName}
          />

          <InputField
            label="Mother Name"
            name="motherName"
            placeholder="Enter  youur Mother Name"
            register={register}
            registerOptions={{ required: "motherName is required" }}
            error={errors.motherName}
          />
        </div>

        <div className="flex gap-4">
          <InputField
            label="Email"
            name="email"
            placeholder="Enter your Email"
            register={register}
            registerOptions={{ required: "email is required" }}
            error={errors.email}
          />

          <InputField
            label="Religion"
            name="religion"
            placeholder="Enter Religion"
            register={register}
            registerOptions={{ required: "religion is required" }}
            error={errors.religion}
          />
        </div>
        <div className="flex gap-4">
          <InputField
            label="Cnic"
            name="cnic"
            placeholder="Enter your cnic number"
            register={register}
            registerOptions={{ required: "cnic is required" }}
            error={errors.cnic}
          />

          <InputField
            label="Age"
            name="Age"
            placeholder="Enter Age"
            register={register}
            registerOptions={{ required: "Age is required" }}
            error={errors.Age}
          />
        </div>
           <div className="flex gap-4" >
        <InputField
          label="Gender"
          name="Gender"
          placeholder="Enter Gender"
          register={register}
          registerOptions={{ required: "Gender is required" }}
          error={errors.Gender}
        />
        <InputField
          label="Contact"
          name="contact"
          placeholder="Enter your contact number"
          register={register}
          registerOptions={{ required: "contact number is required" }}
          error={errors.contact}
        />
        </div>
        <div  className="flex gap-4">
        <InputField
          label="Permenent Address"
          name="permenentAddress"
          placeholder="Enter  your permenent Address"
          register={register}
          registerOptions={{ required: "permenent Address is required" }}
          error={errors.permenentAddress}
        />
        <InputField
          label="City"
          name="city"
          placeholder="Enter your city name"
          register={register}
          registerOptions={{ required: "city name is required" }}
          error={errors.city}
        />
        </div>
        <div  className=" flex gap-4" >
        <InputField
          label="Country"
          name="country"
          placeholder="Enter  your country name"
          register={register}
          registerOptions={{ required: "country name is required" }}
          error={errors.country}
        />
        <InputField
          label="Postal Code"
          name="postalCode"
          placeholder="Postal Code"
          register={register}
          error={errors.postalCode}
        />
        </div>
        <div className="flex gap-4" >
        <InputField
          label="Birthdate"
          name="birthDate"
          placeholder="Enter your Birthdate"
          register={register}
          registerOptions={{ required: "birthdate is required" }}
          error={errors.birthDate}
          type="date"
        />
        <InputField
          label="Emergency Contact Number"
          name="emergencyContactNumber"
          placeholder="Enter Emergency Contact Number"
          register={register}
          registerOptions={{ required: "emergency Contact Number is required" }}
          error={errors.emergencyContactNumber}
        />
        </div>
        <InputField
          label="image"
          type="file"
          name="facePicture"
          placeholder="image"
          register={register}
          registerOptions={{ required: "image is required" }}
          error={errors.facePicture}
        />

        <div className="mt-4 flex flex-row justify-end gap-4">
          <button
            className="rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
            type="submit"
          >
            Submit
          </button>
          <button
            className="rounded-lg bg-gray-300 px-6 py-2 text-gray-800 transition hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
