"use client"
import { authClient } from "@/lib/better-auth/auth-client"

export function Dashboard() {
    const session = authClient.useSession();

    return <div>
        {JSON.stringify(session)}
    </div>
}