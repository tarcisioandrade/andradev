import { allPosts } from "contentlayer/generated";

export const getUniqueCategories = () => {
  const allCategoriesPosts = allPosts
    .filter(({ isPublished, title }) => {
      if (title === "Recursos disponiveis no blog") {
        return false;
      }
      if (isPublished) {
        return true;
      }
    })
    .map(({ categories }) => categories);

  const uniqueCategories = new Set<string>();

  allCategoriesPosts.flat().map((cat) => uniqueCategories.add(cat));

  const categories = Array.from(uniqueCategories);

  return categories.sort();
};
