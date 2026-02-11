"use client";

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import type { UserFormProps } from "./types";
import type { FormValues } from "@/app/dashboard/users/types";
import InputField from "@/components/InputField/InputField";

export default function UserForm({
  existingUser,
  onSave,
  onCancel,
}: UserFormProps) {
  const {
    register,
    control,
    handleSubmit,
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

  const onSubmit = (data: FormValues) => {
    onSave({
      ...data,
    });
    console.log("User Form Submitted:", data);
    alert("User Form submitted successfully!");
    reset();
  };

  return (
    <div className="w-full rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold">
        {existingUser ? "edit User" : "register User"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          label="name"
          name="name"
          placeholder="Enter name"
          register={register}
          registerOptions={{ required: "Name is required" }}
          error={errors.name}
        />
        <InputField
          label="role"
          name="role"
          placeholder="Enter role"
          register={register}
          registerOptions={{ required: "role is required" }}
          error={errors.role}
        />

        <InputField
          label="fatherName"
          name="fatherName"
          placeholder="Enter fatherName"
          register={register}
          registerOptions={{ required: "fatherName is required" }}
          error={errors.fatherName}
        />

        <InputField
          label="motherName"
          name="motherName"
          placeholder="Enter motherName"
          register={register}
          registerOptions={{ required: "motherName is required" }}
          error={errors.motherName}
        />

        <InputField
          label="email"
          name="email"
          placeholder="Enter email"
          register={register}
          registerOptions={{ required: "email is required" }}
          error={errors.email}
        />

        <InputField
          label="religion"
          name="religion"
          placeholder="Enter religion"
          register={register}
          registerOptions={{ required: "religion is required" }}
          error={errors.religion}
        />

        <InputField
          label="cnic"
          name="cnic"
          placeholder="Enter cnic"
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

        <InputField
          label="Gender"
          name="Gender"
          placeholder="Enter Gender"
          register={register}
          registerOptions={{ required: "Gender is required" }}
          error={errors.Gender}
        />
        <InputField
          label="contact"
          name="contact"
          placeholder="Enter contact"
          register={register}
          registerOptions={{ required: "contact is required" }}
          error={errors.contact}
        />
        <InputField
          label="permenentAddress"
          name="permenentAddress"
          placeholder="Enter permenent Address"
          register={register}
          registerOptions={{ required: "permenent Address is required" }}
          error={errors.permenentAddress}
        />
        <InputField
          label="permenentAddress"
          name="permenentAddress"
          placeholder="Enter permenent Address"
          register={register}
          registerOptions={{ required: "permenent Address is required" }}
          error={errors.permenentAddress}
        />
        <InputField
          label="permenentAddress"
          name="permenentAddress"
          placeholder="Enter permenent Address"
          register={register}
          registerOptions={{ required: "permenent Address is required" }}
          error={errors.permenentAddress}
        />
      </form>
    </div>
  );
}
