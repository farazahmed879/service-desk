"use client";
import { useState } from "react";
import NewLicenseForm from "@/components/DrivingLicense/NewLicense/NewLicenseForm";
import RenewLicenseForm from "@/components/DrivingLicense/RenewLicense/RenewLicenseForm";
import LostLicenseForm from "@/components/DrivingLicense/LostLicense/LostLicenseForm";

interface DrivingLicenseFormProps {
    serviceType?: string;
}

export default function DrivingLicenseForm({ serviceType }: DrivingLicenseFormProps) {
    const renderForm = () => {
        switch (serviceType) {
            case "new-license":
                return <NewLicenseForm serviceType={serviceType} />;
            case "renew-license":
                return <RenewLicenseForm serviceType={serviceType} />;
            case "lost-license":
                return <LostLicenseForm serviceType={serviceType} />;
            default:
                return (
                    <div className="flex items-center justify-center p-12 bg-white rounded-lg shadow-sm border border-gray-100">
                        <p className="text-gray-500 text-lg">Please select a valid Driving License service</p>
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
