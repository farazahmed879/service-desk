"use client";
import { useParams } from "next/navigation";
import DrivingLicenseForm from "@/components/DrivingLicense/DrivingLicenseForm";

export default function DrivingLicenseServicePage() {
    const params = useParams();
    const serviceType = params.service as string;

    return <DrivingLicenseForm serviceType={serviceType} />;
}
