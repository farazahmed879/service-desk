"use client";

import dynamic from "next/dynamic";
import React from "react";

export default function DrivingLicenseService() {
  const DrivingLicenseForm = dynamic(
    () =>
      import("@/components/DrivingLicenseForm/DrivingLicenseForm").then(
        (mod) => mod.default
      ),
    { ssr: false }
  );

  return (
    <div className="p-4">
      <DrivingLicenseForm />
    </div>
  );
}
