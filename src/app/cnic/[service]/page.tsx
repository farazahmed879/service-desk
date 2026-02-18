"use client";

import { useParams } from "next/navigation";
import CnicServicePage from "../page";

export default function CnicDynamicPage() {
    const params = useParams();
    const service = params.service as string;

    return <CnicServicePage serviceType={service} />;
}
