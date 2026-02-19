"use client";

import { useRouter } from "next/navigation";
import { SERVICES } from "./data";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CustomButton } from "@/components/ui-elements/custom-button";

export default function ServicesPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isChildView, setIsChildView] = useState(false);

  const [formData, setFormData] = useState({
    service: "",
    name: "",
    fees: "",
    type: "",
    description: "",
  });
  const [allServices, setAllServices] = useState(SERVICES);

  const goToService = (service: any) => {
    router.push(`/${service.slug}`);
  };

  const handleServiceClick = (service: any) => {
    if (service.children && service.children.length > 0) {
      renderUtilities(service.children);
      return;
    }
    router.push(service.route);
  };

  const renderUtilities = (data: any[] = []) => {
    setAllServices(data);
    setIsChildView(data !== SERVICES);
  };
  const handleReset = () => {
    renderUtilities(SERVICES);
  };

  const handleBack = () => {
    renderUtilities(SERVICES);
  };

  useEffect(() => {
    const stored = localStorage.getItem("services");
    if (stored) {
      setAllServices([...SERVICES, ...JSON.parse(stored)]);
    }
  }, []);

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
          <CustomButton>Add Service</CustomButton>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {allServices
          .filter((service) =>
            selectedService
              ? service.slug === selectedService
              : service.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((service, index) => (
            <div
              key={`${service.slug}-${index}`}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-dark"
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 dark:from-gray-800 dark:to-gray-900">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="mx-auto h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-110 sm:h-32"
                  />
                ) : (
                  <div className="flex h-28 items-center justify-center sm:h-32">
                    <span className="text-4xl text-blue-500">🛠️</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {service.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-dark-6">
                  Experience seamless {service.title} processing with our
                  efficient utility tools.
                </p>
                <div className="mt-4 flex items-center text-xs font-semibold uppercase tracking-wider text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 dark:text-blue-400">
                  View Service
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-6 flex justify-end">
        {isChildView && (
          <CustomButton onClick={handleBack} variant="secondary">
            Back
          </CustomButton>
        )}
      </div>
    </div>
  );
}
