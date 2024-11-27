import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const BaseURL = "https://google.com";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin",]
            }
        ],
        sitemap: `${BaseURL}/sitemap.xml`
    }
}