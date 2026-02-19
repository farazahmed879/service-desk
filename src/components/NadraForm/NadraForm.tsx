"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CnicForm from "./CNIC/CnicForm";
import BirthCertificateForm from "./BirthCertificate/BirthCertificateForm";
import NikahNameForm from "./NikahName/NikahNameForm";


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
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-6 lg:p-8">
      {renderForm()}
    </div>
  );
}

