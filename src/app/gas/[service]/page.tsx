"use client";
import { useParams } from "next/navigation";
import SuiGasForm from "@/components/SuiGas/SuiGasForm";

export default function GasServicePage() {
    const params = useParams();
    const serviceType = params.service as string;

    return <SuiGasForm serviceType={serviceType} />;
}
