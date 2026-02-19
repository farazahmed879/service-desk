"use client";
import { useParams } from "next/navigation";
import BillAndPaymentsForm from "@/components/BillAndPayments/BillAndPaymentsForm";

export default function BillAndPaymentsServicePage() {
    const params = useParams();
    const serviceType = params.service as string;

    return <BillAndPaymentsForm serviceType={serviceType} />;
}
