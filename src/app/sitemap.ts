import { getUniqueCategories } from "@/utils/getUniqueCategories";
import { slugger } from "@/utils/slugger";
import { MetadataRoute } from "next";

const generateCategorySiteMap = (): MetadataRoute.Sitemap => {
  const cateries = getUniqueCategories();

  return cateries.map((categ) => ({
    changeFrequency: "monthly",
    lastModified: new Date(),
    priority: 0.8,
    url: `${String(process.env.DOMAIN_URL)}/category/${slugger(categ)}`,
  }));
};

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryMap = generateCategorySiteMap();
  return [
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
      url: String(process.env.DOMAIN_URL),
    },
    ...categoryMap,
  ];
}
