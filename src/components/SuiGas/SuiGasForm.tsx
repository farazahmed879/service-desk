"use client";
import { useState } from "react";
import GasConnectionForm from "./GasConnection/GasConnectionForm";
import GasBillingForm from "./GasBilling/GasBillingForm";
import MeterChangeForm from "./MeterChange/MeterChangeForm";
import NameChangeForm from "./NameChange/NameChangeForm";

interface SuiGasFormProps {
    serviceType?: string;
}

export default function SuiGasForm({ serviceType }: SuiGasFormProps) {
    const renderForm = () => {
        switch (serviceType) {
            case "gas-connection":
                return <GasConnectionForm serviceType={serviceType} />;
            case "gas-billing":
                return <GasBillingForm serviceType={serviceType} />;
            case "meter-change":
                return <MeterChangeForm serviceType={serviceType} />;
            case "name-change":
                return <NameChangeForm serviceType={serviceType} />;
            default:
                return (
                    <div className="flex items-center justify-center p-12 bg-white rounded-lg shadow-sm border border-gray-100">
                        <p className="text-gray-500 text-lg">Please select a valid Sui Gas service</p>
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
