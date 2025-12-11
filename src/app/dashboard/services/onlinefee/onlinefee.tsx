"use client";

import dynamic from "next/dynamic";

export default function OnlineFeePaymentService() {
  const OnlineFeePaymentForm = dynamic(
    () =>
      import("@/components/OnlineFeePayment/OnlineFeePayment").then((mod) => mod.default),
    { ssr: false }
  );

  return (
    <div className="p-4">
      <OnlineFeePaymentForm />
    </div>
  );
}
