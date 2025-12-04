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
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100"
/*       onClick={() => setSelectedService(service)}
 */    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-44 object-contain bg-gray-50 rounded-t-2xl p-4"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>

        {/* <button className="mt-5 w-full bg-green-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition">
          Manage
        </button> */}
      </div>
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