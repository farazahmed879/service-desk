"use client";

import dynamic from "next/dynamic";

export default function VehicleRegistrationService() {
  const VehicleForm = dynamic(
    () =>
      import("@/components/VehicleForm/VehicleForm").then(
        (mod) => mod.default
      ),
    { ssr: false }
  );

  return (
    <div className="p-4">
      <VehicleForm />
    </div>
  );
}
