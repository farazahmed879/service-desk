"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import React from "react";

export default function ServicePage() {
  const params = useParams();
  let service = params?.service;

  if (Array.isArray(service)) service = service[0];
  if (!service) return <p className="text-red-500">Service not specified</p>;

  const serviceComponents: Record<string, string> = {
    "passport": "../passport/passportform",
    "cnic": "../cnic/cnicform",
    "b-form": "../b-form/bform",
    "challan-and-payments": "../challan_and_payments/challans",
    "vehicle-registration": "../vehicle-Registration/registration",
    "driving-license": "../driving-license/DrivingLicense",
    "track-passport-application-status": "../track-passport/track",
    "number-plate": "../number_plate_services/number_plate_service",
    "vehicle-transfer": "../vehicle_transfer/VehicleTransfer",
    "birth-certificate": "../birth _certificate/birthcertificate",
    "domicile-prc": "../domicile_prc/domicile_prc",
  };

  const key = service.toLowerCase().trim();
  const selectedService = serviceComponents[key];

  if (!selectedService)
    return <p className="text-red-500">This service is not ready yet</p>;

  const FormComponent = dynamic(
    () => import(selectedService).then((mod) => mod.default),
    { ssr: false },
  );

  return (
    <div>
      <FormComponent />
    </div>
  );
}
