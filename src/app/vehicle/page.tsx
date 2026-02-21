"use client";
import React from "react";
import VehicleForm from "@/components/Vehicle/VehicleForm";

interface VehiclePageProps {
    params?: {
        service?: string;
    };
}

export default function VehiclePage({ params }: VehiclePageProps) {
    return (
        <div>
            <VehicleForm serviceType={params?.service} />
        </div>
    );
}
