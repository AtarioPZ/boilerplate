import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const BaseURL = "https://google.com";

    return [
        {
            url: `${BaseURL}`,
            lastModified: new Date(),
        },
        {
            url: `${BaseURL}/about`,
            lastModified: new Date(),
        },
    ]
}