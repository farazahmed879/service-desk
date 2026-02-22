"use client";
import { useParams } from "next/navigation";
import ElectricForm from "@/components/Electric/ElectricForm";

export default function ElectricServicePage() {
    const params = useParams();
    const serviceType = params.service as string;

    return <ElectricForm serviceType={serviceType} />;
}
