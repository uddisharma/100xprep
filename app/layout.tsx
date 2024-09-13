import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { siteConfig } from "@/config/site-config";
import { SessionRootLayout } from "@/lib/providers/session";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark ">
      <body className={inter.className}>
        <SessionRootLayout>
          <Toaster />
          {children}
        </SessionRootLayout>
      </body>
    </html>
  );
}
