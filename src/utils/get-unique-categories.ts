import { allPosts } from "contentlayer/generated";

export const getUniqueCategories = () => {
  const allCategoriesPosts = allPosts
    .filter(({ isPublished }) => isPublished)
    .map(({ categories }) => categories);

  const uniqueCategories = new Set<string>();

  allCategoriesPosts.flat().map((cat) => uniqueCategories.add(cat));

  const categories = Array.from(uniqueCategories);

  return categories.sort();
};
