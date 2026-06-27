"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "rgba(255, 255, 255, 0.20)",
          "--normal-text": "rgba(0, 0, 0, 0.80)",
          "--normal-border": "rgba(255, 255, 255, 0.30)",
          "--border-radius": "999px",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "backdrop-blur-md shadow-[0_2px_4px_rgba(0,0,0,0.08),0_8px_32px_rgba(0,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.4)_inset] font-mono tracking-tight text-sm px-3",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }