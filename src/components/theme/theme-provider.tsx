"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }: React.PropsWithChildren) {
  return <NextThemesProvider
    attribute="class"
    defaultTheme="system"
    enableSystem={true}
    disableTransitionOnChange={false}
  >
    {children}
  </NextThemesProvider>
}
