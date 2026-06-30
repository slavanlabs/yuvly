"use client"
import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react"
import { cn } from "@workspace/ui/lib/utils"
import { FcGoogle } from "react-icons/fc"
import { MdOutlineMail } from "react-icons/md"
import { LogIn, UserRoundPlus } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Input } from "@workspace/ui/components/input"
import { YuvlyMascot } from "@/components/yuvly-mascot"
import { useTheme } from "next-themes"

export function Auth() {
  const [active, setActive] = useState<"signin" | "signup">("signin")
  const { theme } = useTheme()
  return (
    <div
      className={cn("flex h-screen w-screen items-center gap-2 select-none")}
    >
      <div className="h-[99%] flex-1 px-4 py-4">
        <div className="relative h-full">
          <Image
            src={theme === "light" ? "/waitlist-image.jpg" : "/yuvly.jpg"}
            alt=""
            fill
            loading="eager"
            className={cn(
              "rounded-lg object-cover",
              theme === "light" && "object-left"
            )}
          />
        </div>
      </div>
      <div className="flex h-full flex-1 flex-col items-center justify-center">
        <div className="flex max-w-md min-w-md flex-col gap-4 p-2">
          <div className="mr-8 flex items-center justify-center">
            <YuvlyMascot size={50} />
            <h1 className="text-4xl font-semibold tracking-[-0.14rem]">
              Yuvly
            </h1>
          </div>
          <h2 className="mx-auto max-w-xs text-center text-2xl font-medium tracking-tighter text-muted-foreground">
            Orchestrate your travel agency with AI agents.
          </h2>
          <div className="relative mx-auto mt-8 flex max-w-fit items-center rounded-full bg-[#F5F5F2] p-0 text-xs dark:bg-neutral-800">
            <motion.div
              layout
              className="absolute h-full w-1/2 rounded-full border border-neutral-200 bg-[#FCFCF9] shadow-sm dark:border-neutral-600 dark:bg-neutral-700"
              animate={{ x: active === "signin" ? "0%" : "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <Button
              size="xs"
              variant="ghost"
              onClick={() => setActive("signin")}
              className={cn(
                "relative z-10 cursor-pointer rounded-full border-none px-6 py-3 hover:bg-transparent! focus:ring-0!",
                active === "signin"
                  ? "text-black dark:text-white"
                  : "text-gray-400 dark:text-neutral-500"
              )}
            >
              <LogIn />
              Sign In
            </Button>
            <Button
              size="xs"
              variant="ghost"
              onClick={() => setActive("signup")}
              className={cn(
                "relative z-10 cursor-pointer rounded-full border-none px-6 py-3 hover:bg-transparent! focus:ring-0!",
                active === "signup"
                  ? "text-black dark:text-white"
                  : "text-gray-400 dark:text-neutral-500"
              )}
            >
              <UserRoundPlus />
              Sign Up
            </Button>
          </div>

          <div className="w-full space-y-3">
            <Label>Email</Label>
            <Input
              placeholder="Enter your email"
              className="h-12 w-full max-w-[500px] items-center rounded-full border border-[#F5F5F2] bg-[#FBFBF7] px-4 sm:h-12 dark:border-neutral-800"
            />
          </div>
          <div className="w-full space-y-3">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="h-12 w-full max-w-[500px] items-center rounded-full border border-[#F5F5F2] bg-[#FBFBF7] px-4 sm:h-12 dark:border-neutral-800"
            />
          </div>
          <Button
            size={"lg"}
            className={cn(
              "mt-4 cursor-pointer rounded-full border-2 border-blue-400 bg-blue-500 py-6! text-sm text-white shadow-sm shadow-blue-300/60 hover:bg-blue-500/90 hover:shadow-none"
            )}
          >
            <MdOutlineMail />
            Continue with email
          </Button>
          {/* OR */}
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-600" />
            <span className="mx-2 font-mono text-[12px] font-medium tracking-tighter text-neutral-500 uppercase">
              OR
            </span>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-600" />
          </div>

          <Button
            size={"lg"}
            className={cn(
              "cursor-pointer rounded-full border-2 border-neutral-400 py-6! text-sm dark:border-neutral-200",
              "shadow-[0_2px_8px_rgba(255,255,255,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
              "hover:bg-neutral-800 hover:shadow-none dark:hover:bg-neutral-50",
              "bg-linear-to-t from-[#0f0f0f] to-[#262626] dark:from-white dark:to-white"
            )}
          >
            <FcGoogle size={30} />
            Sign {active === "signin" ? "in" : "up"} with Google
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          By continuing you agree to our{" "}
          <span className="font-medium underline">Privacy Policy</span> and{" "}
          <span className="font-medium underline">Terms of Service</span>
        </p>
      </div>
    </div>
  )
}
