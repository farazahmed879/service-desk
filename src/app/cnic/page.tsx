"use client";

import React from "react";
import CnicForm from "@/components/CnicForm/CnicForm";

interface CnicServicePageProps {
  serviceType?: string;
}

export default function CnicServicePage({ serviceType }: CnicServicePageProps) {
  return (
    <div >
      <CnicForm serviceType={serviceType} />
    </div>
  );
}






