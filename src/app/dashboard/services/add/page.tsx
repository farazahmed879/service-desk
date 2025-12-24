"use client";

import ServiceForm from "@/components/services/ServiceForm";

export default function AddServicePage() {
  return (
    <div className="p-6">
      {/*       <h1 className="text-2xl font-bold mb-4">Add Service</h1>
       */}

      <ServiceForm
        onSave={(data) => console.log(data)}
        onClose={() => console.log("Closed")}
      />
    </div>
  );
}
