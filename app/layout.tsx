import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { ContextMenu } from "~/components/context-menu/context-menu";
import { ThemeProvider } from "~/context/theme/theme";

import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Network Coding Graph Visualizer",
  description: "Network Coding tool for visualizing and process a network coded graph",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-background h-dvh antialiased`}>
        <ContextMenu>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ContextMenu>
      </body>
    </html>
  );
}
