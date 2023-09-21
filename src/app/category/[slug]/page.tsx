import { PostCard } from "@/components/post-card";
import { Post } from "@/types/post";
import { capitalize } from "@/utils/capitalize";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const category = capitalize(params.slug.split("-").join(" "));
  return {
    title: `${category} - Tarcisio Andrade`,
    category,
  };
};

const Page = ({ params }: Props) => {
  const posts = allPosts.filter((post) =>
    post.categories.some(
      (categ) =>
        categ.toLowerCase().replace(/\s/g, "") ===
        params.slug.split("-").join("")
    )
  ) as Post[];

  const postCount = posts.length + (posts.length > 1 ? " Artigos" : " Artigo");
  const categoryToDysplay = capitalize(params.slug.split("-").join(" "));

  return (
    <main>
      <div className="container py-24">
        <div>
          <span className="tracking-widest uppercase text-gray-600 text-sm mb-2">
            Categoria
          </span>
          <h1 className="uppercase text-4xl font-medium">
            {categoryToDysplay}
          </h1>
        </div>

        <div className="flex items-center gap-4 my-12 uppercase text-sm">
          <span>{postCount}</span>
          <div className="border-b border-gray-200 dark:border-gray-800 flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:ml-[-24px]">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-gray-800 rounded-lg p-6"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
