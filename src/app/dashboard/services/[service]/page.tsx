"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import React from "react";
import Passportform from "../passport/passportform";
import CnicForm from "@/components/CnicForm/CnicForm";
import BFormServicePage from "../b-form/bform";
import VehicleRegistrationService from "../vehicle-Registration/registration";
import DrivingLicenseService from "../driving-license/DrivingLicense";


export default function ServicePage() {
  const params = useParams();
  let service = params?.service;

  if (Array.isArray(service)) service = service[0];
  if (!service) return <p className="text-red-500">Service not specified</p>;

  const serviceComponents: Record<string, React.ComponentType> = {
    "new-passport-application": Passportform,
    "cnic-application": CnicForm,
    "b-form": BFormServicePage,
    // "challan-and-payments": "../challan_and_payments/challans",
    "vehicle-registration": VehicleRegistrationService,
    "driving-license": DrivingLicenseService,
    // "track-passport-application-status": "../track-passport/track",
    // "number-plate-services": "../number_plate_services/number_plate_service",
    // "vehicle-transfer": "../vehicle_transfer/VehicleTransfer",
    // "birth-certificate": "../birth _certificate/birthcertificate",
    // "domicile-prc": "../domicile_prc/domicile_prc",
  };

  const key = service.toLowerCase().trim();
  const FormComponent = serviceComponents[key];

  if (!FormComponent)
    return <p className="text-red-500">This service is not ready yet</p>;

  

  return (
    <div className="p-4">
      <FormComponent />
    </div>
  );
}
