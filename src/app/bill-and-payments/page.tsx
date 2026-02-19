"use client";
import React from "react";
import BillAndPaymentsForm from "@/components/BillAndPayments/BillAndPaymentsForm";

interface BillAndPaymentsPageProps {
    params?: {
        service?: string;
    };
}

export default function BillAndPaymentsPage({ params }: BillAndPaymentsPageProps) {
    return (
        <div>
            <BillAndPaymentsForm serviceType={params?.service} />
        </div>
    );
}
