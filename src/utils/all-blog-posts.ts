import { allPosts } from "contentlayer/generated";

export const allBlogPosts = allPosts.filter(({ title }) => {
  if (
    title === "Recursos disponiveis no blog" &&
    process.env.NODE_ENV != "development"
  ) {
    return false;
  }

  return true;
});
