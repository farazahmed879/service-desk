"use client";

import { useRouter } from "next/navigation";
import { SERVICES } from "./data";
import React from "react";

export default function ServicesPage() {
  const router = useRouter();

  const goToService = (service: any) => {
    router.push(`/dashboard/services/${service.slug}`);
  };

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((service) => (
        <div
          key={service.slug}
          onClick={() => goToService(service)}
          className="cursor-pointer rounded-lg border p-4 hover:bg-gray-50 transition"
        >
          {service.image && (
            <div className="w-full h-32 sm:h-36 md:h-40 overflow-hidden flex items-center justify-center bg-gray-50 rounded-t-lg">
              <img
                src={service.image}
                alt={service.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}

          <h3 className="text-lg font-semibold mt-2">{service.title}</h3>
        </div>
      ))}
    </div>
  );
}


/* "use client";

 {}
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
      onClick={() => setSelectedService(service)}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-44 object-contain bg-gray-50 rounded-t-2xl p-4"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>

        
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
} */

   