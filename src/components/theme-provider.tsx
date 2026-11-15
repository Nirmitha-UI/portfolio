"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

// next-themes injects an inline <script> to set the theme before paint.
// The server-rendered copy runs normally; on the client React 19 warns about
// rendering a <script>, so give the client copy a non-executable type.
// Workaround until next-themes ships a fix (latest is 0.4.6).
const clientScriptProps =
  typeof window === "undefined"
    ? undefined
    : ({ type: "application/json" } as const);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider scriptProps={clientScriptProps} {...props}>
      {children}
    </NextThemesProvider>
  );
}
