"use client";

import { useParams } from "next/navigation";
import BFormServicePage from "@/app/b-form/page";

export default function BFormDynamicPage() {
    const params = useParams();
    const service = params.service as string;

    return <BFormServicePage serviceType={service} />;
}
