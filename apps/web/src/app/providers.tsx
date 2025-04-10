import { ThemeProvider } from "@/components/theme-provider"
import MswClientProvider from "@/providers/msw.provider"
import type { ReactNode } from "react"

type ProvidersProps = {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ThemeProvider attribute={'class'} defaultTheme="system" storageKey="fastship-theme">
        <MswClientProvider>
          {children}
        </MswClientProvider>
      </ThemeProvider>
    </>
  )
}