"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

export default function ServiceFormPage() {
  const { service } = useParams();

  if (!service || Array.isArray(service)) {
    return <p className="text-red-500">Service not found</p>;
  }

  const DynamicForm = dynamic(() => import(`./${service}`), { ssr: false });

  return (
    <div >
      <h1 className="text-2xl font-bold mb-4">
        {service.replace(/-/g, " ")} Form
      </h1>
      <DynamicForm />
    </div>
  );
}



