import { Metadata } from "next";

const TITLE = "100xPrep";
const DESCRIPTION = "A product of 100xDevs";
const PREVIEW_IMAGE_URL =
  "https://framerusercontent.com/images/XUh6mGebzVy9F66ZtVIImQFfR4.png?scale-down-to=512";
const ALT_TITLE = "Prepare your next interview with 100xPrep";
export const BASE_URL = "http://localhost:3000";

export const siteConfig: Metadata = {
  title: {
    default: "100xPrep",
    template: "%s | 100xPrep",
  },
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "100xPrep",
  creator: "Deepak Sharma",
  twitter: {
    creator: "@uddisharma",
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "100xPrep",
    url: BASE_URL,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  category: "Interview",
  alternates: {
    canonical: BASE_URL,
  },
  keywords: ["Interview", "100xPrep", "100xDevs", "Jobs", "Remote Jobs"],
  metadataBase: new URL(BASE_URL),
};
