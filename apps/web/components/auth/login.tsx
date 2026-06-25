"use client"

import { YuvlyMascot } from "@/components/yuvly-mascot"
import { Button } from "@workspace/ui/components/button"
import { authClient } from "@/lib/better-auth/auth-client"

export function Login() {

  const handleLoginWithGoole = async () => {
    try { 
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "http://localhost:3000/callback",
        fetchOptions: {
          credentials: "include"
        },
      });
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="flex flex-col gap-2">
        <YuvlyMascot size={70} />
        <div>
          <h1 className="text-3xl font-medium tracking-tighter">
            Welcome to Yuvly
          </h1>
          <h2 className="text-3xl tracking-tighter text-muted-foreground">
            Hey there, am your travel buddy
          </h2>
        </div>

        <Button onClick={handleLoginWithGoole} className="mt-5 w-full cursor-pointer rounded-2xl py-6 text-[16.5px] font-medium hover:bg-white/80">
          Continue with Google
        </Button>
      </div>
    </div>
  )
}
