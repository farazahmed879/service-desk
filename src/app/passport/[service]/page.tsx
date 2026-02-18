"use client";

import { useParams } from "next/navigation";
import Passport from "../page";

export default function PassportServicePage() {
    const params = useParams();
    const service = params.service as string;

    return <Passport serviceType={service} />;
}
