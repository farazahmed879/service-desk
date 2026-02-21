"use client";
import { useState } from "react";
import RegistrationForm from "@/components/Vehicle/Registration/RegistrationForm";
import TaxPaymentForm from "@/components/Vehicle/TaxPayment/TaxPaymentForm";
import NumberPlateForm from "@/components/Vehicle/NumberPlate/NumberPlateForm";
import VehicleTransferForm from "@/components/Vehicle/VehicleTransfer/VehicleTransferForm";

interface VehicleFormProps {
    serviceType?: string;
}

export default function VehicleForm({ serviceType }: VehicleFormProps) {
    const renderForm = () => {
        switch (serviceType) {
            case "registration":
                return <RegistrationForm serviceType={serviceType} />;
            case "tax-payment":
                return <TaxPaymentForm serviceType={serviceType} />;
            case "number-plate":
                return <NumberPlateForm serviceType={serviceType} />;
            case "vehicle-transfer":
                return <VehicleTransferForm serviceType={serviceType} />;
            default:
                return (
                    <div className="flex items-center justify-center p-12 bg-white rounded-lg shadow-sm border border-gray-100">
                        <p className="text-gray-500 text-lg">Please select a valid Vehicle service</p>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50/50 p-4 md:p-6 lg:p-8">
            {renderForm()}
        </div>
    );
}
