"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/better-auth/auth-client"

export default function CallbackPage() {
  const { data } = authClient.useSession()
  const router = useRouter()

  useEffect(() => {
    if (!data?.session) {        
      router.push("/login")
      return
    }
    if (!data.user.phone) {
      router.push("/onboard")
      return
    }
    router.push("/dashboard")
  }, [data?.session])

  return null
}
