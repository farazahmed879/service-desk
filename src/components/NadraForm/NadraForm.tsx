"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CnicForm from "./CnicForm";
import BirthCertificateForm from "./BirthCertificateForm";
import NikahNameForm from "./NikahNameForm";
  

interface NadraFormProps {
  serviceType?: string;
}

export default function NadraForm({ serviceType }: { serviceType?: string }) {
  const renderForm = () => {
    switch (serviceType) {
      case "cnic":
        return <CnicForm serviceType={serviceType} />;
      case "birthcertificate":
        return <BirthCertificateForm serviceType={serviceType} />;
      case "nikahname":
        return <NikahNameForm serviceType={serviceType} />;
      default:
        return <div>Please select a valid Nadra service</div>;
    }
  };

  return (
    <div>
      <h2>Nadra - {serviceType}</h2>
      {renderForm()}
    </div>
  );
}

