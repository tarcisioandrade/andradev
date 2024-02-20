import React from "react";
import { PostCard } from "@/components/post-card";
import { allBlogPosts } from "@/utils/all-blog-posts";
import { capitalize } from "@/utils/capitalize";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const category = capitalize(params.slug.split("-").join(" "));
  return {
    category,
    title: `${category} - Tarcisio Andrade`,
  };
};

const Page = ({ params }: Props) => {
  const posts = allBlogPosts.filter((post) =>
    post.categories.some(
      (categ) =>
        categ.toLowerCase().replaceAll(/\s/g, "") ===
        params.slug.split("-").join(""),
    ),
  );

  const postCount = posts.length + (posts.length > 1 ? " Artigos" : " Artigo");
  const categoryToDysplay = capitalize(params.slug.split("-").join(" "));

  return (
    <main className="main-container py-24">
      <div>
        <span className="mb-2 text-sm uppercase tracking-widest text-gray-600">
          Categoria
        </span>
        <h1 className="text-4xl font-medium uppercase">{categoryToDysplay}</h1>
      </div>

      <div className="my-12 flex items-center gap-4 text-sm uppercase">
        <span>{postCount}</span>
        <div className="flex-1 border-b border-gray-200 dark:border-gray-800"></div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:ml-[-24px]">
        {posts.map((post, i) => (
          <div
            className="rounded-lg bg-slate-100 p-6 dark:bg-gray-800"
            key={`${post}-${i}`}
          >
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
