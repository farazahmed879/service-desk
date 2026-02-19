"use client";
import { useParams } from "next/navigation";
import NadraForm from "@/components/NadraForm/NadraForm";

export default function NadraServicePage() {
  const params = useParams();
  const service = params.service as string;

  return <NadraForm serviceType={service?.toLowerCase()} />;
}
