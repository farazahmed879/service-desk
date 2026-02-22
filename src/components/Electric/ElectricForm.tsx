"use client";
import React from "react";
import ConnectionForm from "./Connection/ConnectionForm";
import BillingForm from "./Billing/BillingForm";
import MeterChangeForm from "./MeterChange/MeterChangeForm";
import NameChangeForm from "./NameChange/NameChangeForm";

interface ElectricFormProps {
    serviceType?: string;
}

export default function ElectricForm({ serviceType }: ElectricFormProps) {
    const renderForm = () => {
        switch (serviceType) {
            case "connection":
                return <ConnectionForm serviceType={serviceType} />;
            case "billing":
                return <BillingForm serviceType={serviceType} />;
            case "meter-change":
                return <MeterChangeForm serviceType={serviceType} />;
            case "name-change":
                return <NameChangeForm serviceType={serviceType} />;
            default:
                return (
                    <div className="flex items-center justify-center p-12 bg-white rounded-lg shadow-sm border border-gray-100">
                        <p className="text-gray-500 text-lg">Please select a valid Electric service</p>
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
