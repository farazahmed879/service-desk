"use client";

import React from "react";
import NadraForm from "@/components/NadraForm/NadraForm";

interface NadraServicePageProps {
  serviceType?: string;
}

export default function NadraServicePage({ serviceType }: NadraServicePageProps) {
  return (
    <div>
      <NadraForm serviceType={serviceType} />
    </div>
  );
}
