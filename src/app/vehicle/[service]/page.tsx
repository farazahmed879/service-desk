"use client";
import { useParams } from "next/navigation";
import VehicleForm from "@/components/Vehicle/VehicleForm";

export default function VehicleServicePage() {
    const params = useParams();
    const serviceType = params.service as string;

    return <VehicleForm serviceType={serviceType} />;
}
