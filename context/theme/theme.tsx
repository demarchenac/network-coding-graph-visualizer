"use client";

import { ThemeProvider as NextThemeProvider, type ThemeProviderProps } from "next-themes";

import { useTheme } from "~/store/ui";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const theme = useTheme();

  return (
    <NextThemeProvider {...props} forcedTheme={theme}>
      {children}
    </NextThemeProvider>
  );
}
