"use client";

import React from "react";
import BForm from "@/components/BForm/b-form";

interface BFormServicePageProps {
  serviceType?: string;
}

export default function BFormServicePage({ serviceType }: BFormServicePageProps) {
  return (
    <div >
      <BForm serviceType={serviceType} />
    </div>
  );
}
