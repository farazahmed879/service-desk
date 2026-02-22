"use client";
import React from "react";
import ElectricForm from "@/components/Electric/ElectricForm";

interface ElectricPageProps {
    params?: {
        service?: string;
    };
}

export default function ElectricPage({ params }: ElectricPageProps) {
    return (
        <div>
            <ElectricForm serviceType={params?.service} />
        </div>
    );
}
