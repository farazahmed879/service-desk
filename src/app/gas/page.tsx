"use client";
import React from "react";
import SuiGasForm from "@/components/SuiGas/SuiGasForm";

interface GasPageProps {
    params?: {
        service?: string;
    };
}

export default function GasPage({ params }: GasPageProps) {
    return (
        <div>
            <SuiGasForm serviceType={params?.service} />
        </div>
    );
}
