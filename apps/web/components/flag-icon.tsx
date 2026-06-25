import "../node_modules/flag-icons/css/flag-icons.min.css"

type FlagProps = {
  countryCode: string
  size?: "sm" | "md" | "lg"
  className?: string
}
const sizeMap = {
  sm: "w-4 h-3",
  md: "w-6 h-4",
  lg: "w-8 h-6",
}

export function FlagIcon({ countryCode, size = "md", className }: FlagProps) {
  return (
    <span
      className={`fi fi-${countryCode.toLowerCase()} inline-block rounded-sm ${sizeMap[size]} ${className}`}
    />
  )
}
