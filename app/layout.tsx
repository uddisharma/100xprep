import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "100X Prep",
  description: "A product of 100xdevs",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "100X Prep",
    description: "A product of 100xdevs",
    url: "https://prep.100xdevs.dev",
    siteName: "100X Prep",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark ">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
