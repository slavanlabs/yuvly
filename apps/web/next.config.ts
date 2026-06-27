import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  images: {
    qualities: [75, 85]
  }
}

export default nextConfig
