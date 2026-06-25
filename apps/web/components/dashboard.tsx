"use client"

import { authClient } from "@/lib/better-auth/auth-client"
import { useEffect } from "react";

export function Dashboard() {
    const session = authClient.useSession();

    useEffect(() => {
        const fetchHasPhoneNumber = async () => {
            const response = fetch("http://localhost:8787/api/v1/")
        }
        fetchHasPhoneNumber();
    }, [])

    return <div>
        {JSON.stringify(session)}
    </div>
}