import { PostHogProvider as BasePostHogProvider } from "@posthog/react"
import posthog from "posthog-js"
import type { ReactNode } from "react"

if (typeof window !== "undefined" && import.meta.env.VITE_POSTHOG_PROJECT_TOKEN) {
  posthog.init(import.meta.env.VITE_POSTHOG_PROJECT_TOKEN, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
    defaults: "2026-05-30"
  })
}

interface PostHogProviderProps {
  children: ReactNode
}

export default function PostHogProvider({ children }: PostHogProviderProps) {
  return <BasePostHogProvider client={posthog}>{children}</BasePostHogProvider>
}
