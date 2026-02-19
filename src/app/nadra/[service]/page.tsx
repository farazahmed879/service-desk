"use client";
import { useParams } from "next/navigation";
import NadraForm from "@/components/NadraForm/NadraForm";

export default function NadraServicePage() {
  const params = useParams();
  const serviceType = params.serviceType as string;

  return <NadraForm serviceType={serviceType} />;
}
