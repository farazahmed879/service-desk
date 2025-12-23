"use client";

import { useRouter } from "next/navigation";
import { SERVICES } from "./data";
import React, { useState } from "react";

export default function ServicesPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    fees: "",
    type: "",
    description: "",
  });

  const goToService = (service: any) => {
    router.push(`/dashboard/services/${service.slug}`);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border px-4 py-2 text-sm"
        />

        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          {showForm ? "Close Form" : "Add Service"}
        </button>
      </div>

      {showForm && (
        <div className="mt-4 space-y-4 rounded-lg border bg-gray-50 p-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Service</label>
            <select
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full rounded border px-3 py-2 text-sm"
            >
              <option>Select Service</option>

              {SERVICES.map((s, i) => (
                <option key={i} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Name :</label>
            <input
              type="text"
              placeholder="Enter Your  Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Fees :</label>
            <input
              placeholder="Enter Fees"
              type="text"
              value={formData.fees}
              onChange={(e) =>
                setFormData({ ...formData, fees: e.target.value })
              }
              className="w-full rounded border px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">
              Select Type
            </label>
            <select
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full rounded border px-3 py-2 text-sm"
            >
              <option>Select Type</option>
              <option>Goverment</option>
              <option>Private</option>
            </select>
          </div>

          {/* <div>
            <label className="mb-1 block text-sm font-medium">Type :</label>
            <input
              placeholder="Type"
              type="text"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              className="w-full rounded border px-3 py-2 text-sm"
            />
          </div> */}

          <div>
            <label className="mb-1 block text-sm font-medium">
              Description :
            </label>
            <textarea
              placeholder=" Enter Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full rounded border px-3 py-2 text-sm"
            />
          </div>

          <button
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
            onClick={() => console.log(formData)}
          >
            Save
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.filter((service) =>
          service.title.toLowerCase().includes(search.toLowerCase()),
        ).map((service) => (
          <div
            key={service.slug}
            onClick={() => goToService(service)}
            className="cursor-pointer rounded-lg border p-4 transition hover:bg-gray-50"
          >
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
        ))}
      </div>
    </div>
  );
}
