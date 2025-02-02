import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({ variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk" });

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
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
