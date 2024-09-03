import { BASE_URL } from "@/config/site-config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/order"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
