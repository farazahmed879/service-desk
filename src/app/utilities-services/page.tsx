"use client";

import { useRouter } from "next/navigation";
import { SERVICES } from "./data";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ServicesPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeService, setActiveService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    fees: "",
    type: "",
    description: "",
  });

  const goToService = (service: any) => {
    router.push(`/${service.slug}`);
  };
  const [isChildView, setIsChildView] = useState(false);

  const [allServices, setAllServices] = useState(SERVICES);
  useEffect(() => {
    const stored = localStorage.getItem("services");
    if (stored) {
      setAllServices([...SERVICES, ...JSON.parse(stored)]);
    }
  }, []);

  const renderUtilities = (data: any[] = []) => {
    setAllServices(data);
  };
  const handleReset = () => {
    renderUtilities(SERVICES);
  };

  const handleBack = () => {
    renderUtilities(SERVICES);
  };

  return (
    <div>
      <div className="sticky top-0 z-30 mb-6 flex items-center justify-between rounded-lg bg-white p-4 shadow">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[280px] rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <Link href="./services/add">
          <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Add Service
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allServices
          .filter((service) =>
            selectedService
              ? service.slug === selectedService
              : service.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((service, index) => (
            <div
              key={`${service.slug}-${index}`}
              className="cursor-pointer rounded-lg border p-4 transition hover:bg-gray-50"
            >
              <div onClick={() => renderUtilities(service.children)}>
                {service.image && (
                  <div className="flex h-32 w-full items-center justify-center overflow-hidden rounded-t-lg bg-gray-50 sm:h-36 md:h-40">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}

                <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleBack}
          className="rounded-lg bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
        >
          Back
        </button>
      </div>
    </div>
  );
}
