"use client";
import React from "react";
import DrivingLicenseForm from "@/components/DrivingLicense/DrivingLicenseForm";

interface DrivingLicensePageProps {
  params?: {
    service?: string;
  };
}

export default function DrivingLicensePage({ params }: DrivingLicensePageProps) {
  return (
    <div>
      <DrivingLicenseForm serviceType={params?.service} />
    </div>
  );
}
