"use client";

import { useState } from "react";
import ServiceForm from "./ServiceForm";
import { SERVICES, Service } from "./data";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {SERVICES.map((service) => (
    <div
      key={service.title}
      className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer"
      onClick={() => setSelectedService(service)}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-40 object-cover rounded-lg bg-white"
      />
      

      <h3 className="text-lg font-semibold mt-3">{service.title}</h3>

      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Manage
      </button>
    </div>
  ))}
</div>


      {selectedService && (
        <ServiceForm
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}