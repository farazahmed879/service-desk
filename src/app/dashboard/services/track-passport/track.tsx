"use client";

import dynamic from "next/dynamic";
import React from "react";

export default function TrackPassportService() {
  const TrackForm = dynamic(
    () => import("@/components/TrackPassport/TrackPassportForm").then((mod) => mod.default),
    { ssr: false }
  );

  return (
    <div >
      <TrackForm />
    </div>
  );
}
