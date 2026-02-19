"use client";
import { useState } from "react";
import TaxesAndChallansForm from "@/components/BillAndPayments/TaxesAndChallans/TaxesAndChallansForm";
import IncomeTaxForm from "@/components/BillAndPayments/IncomeTax/IncomeTaxForm";
import PropertyTaxForm from "@/components/BillAndPayments/PropertyTax/PropertyTaxForm";
import VehicleTaxForm from "@/components/BillAndPayments/VehicleTax/VehicleTaxForm";
import NtnRegistrationForm from "@/components/BillAndPayments/NtnRegistration/NtnRegistrationForm";

interface BillAndPaymentsFormProps {
    serviceType?: string;
}

export default function BillAndPaymentsForm({ serviceType }: BillAndPaymentsFormProps) {
    const renderForm = () => {
        switch (serviceType) {
            case "taxes-and-challans":
                return <TaxesAndChallansForm serviceType={serviceType} />;
            case "income-tax":
                return <IncomeTaxForm serviceType={serviceType} />;
            case "property-tax":
                return <PropertyTaxForm serviceType={serviceType} />;
            case "vehicle-tax":
                return <VehicleTaxForm serviceType={serviceType} />;
            case "ntn-registration":
                return <NtnRegistrationForm serviceType={serviceType} />;
            default:
                return (
                    <div className="flex items-center justify-center p-12 bg-white rounded-lg shadow-sm border border-gray-100">
                        <p className="text-gray-500 text-lg">Please select a valid Bill and Payments service</p>
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
