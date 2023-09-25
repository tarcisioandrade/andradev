import { getUniqueCategories } from "@/utils/getUniqueCategories";
import { slugger } from "@/utils/slugger";
import { MetadataRoute } from "next";

const generateCategorySiteMap = (): MetadataRoute.Sitemap => {
  const cateries = getUniqueCategories();

  return cateries.map((categ) => ({
    url: `${String(process.env.URL)}/category/${slugger(categ)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
};

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryMap = generateCategorySiteMap();
  return [
    {
      url: String(process.env.URL),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...categoryMap,
  ];
}
