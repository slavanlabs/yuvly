"use client"

import Image from "next/image"
import { CheckCircle2, Forward, Loader, TriangleAlert } from "lucide-react"
import { useState } from "react"
import { YuvlyMascot } from "@/components/yuvly-mascot"
import { Input } from "@workspace/ui/components/input"
import { Button } from "@workspace/ui/components/button"
import { toast } from "sonner"

export default function Page() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  async function handleSubmit() {
    if (!email.trim() || status !== "idle") return
    setStatus("loading")
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
    if (!response.ok) {
      const json = await response.json()
      toast.error(json.error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 2000)
      return
    }
    const data = await response.json()
    if (data.alreadyJoined) {
      toast.info("You're already on the list!")
      setStatus("idle")
      return
    }
    setStatus("success")
    toast.success("Added to waitlist.")
  }

  return (
    <div className="relative flex min-h-svh selection:bg-blue-500 selection:text-white">
      {/* priority + sizes = LCP image loads immediately at correct size, no layout shift */}
      <Image
        src="/waitlist-image.jpg"
        fill
        alt="Yuvly waitlist"
        className="object-cover object-center"
        priority
        quality={85}
        sizes="100vw"
      />

      <header className="fixed top-0 z-50 flex w-full items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center">
          <YuvlyMascot size={36} />
          <h1 className="text-2xl font-medium tracking-tighter sm:text-3xl">
            Yuvly
          </h1>
        </div>
        <Button
          size="xs"
          className="font-mono font-medium tracking-tighter uppercase text-xs sm:text-sm"
          onClick={() => document.getElementById("email-input")?.focus()}
        >
          Join waitlist
        </Button>
      </header>

      <div className="absolute top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6">
        <p className="mb-5 text-center font-mono text-3xl font-medium tracking-tighter text-black sm:text-4xl">
          Your travel buddy.
        </p>

        <div className="mx-auto flex h-12 w-full max-w-[500px] items-center rounded-full border border-white/30 bg-white/20 px-4 shadow-[0_2px_4px_rgba(0,0,0,0.08),0_8px_32px_rgba(0,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.4)_inset] backdrop-blur-md sm:h-13">
          <Input
            id="email-input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            disabled={status === "loading" || status === "success"}
            className="border-none bg-transparent text-sm text-black placeholder:text-black/50 focus:ring-0! sm:text-base"
          />
          <Button
            size="icon"
            variant="ghost"
            onClick={handleSubmit}
            disabled={status === "loading" || !email.trim()}
            className="shrink-0 cursor-pointer text-black/70 hover:bg-white/20! hover:text-black"
          >
            {status === "loading" ? (
              <Loader className="size-4 animate-spin sm:size-5" />
            ) : status === "success" ? (
              <CheckCircle2 className="size-4 sm:size-5" />
            ) : status === "error" ? (
              <TriangleAlert className="size-4 sm:size-5" />
            ) : (
              <Forward className="size-4 sm:size-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}