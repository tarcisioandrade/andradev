import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDXRender from "@/components/mdx-render";
import MenuToc from "@/components/menu-toc";
import { Metadata } from "next";
import { Timer, Tags } from "lucide-react";
import { Post } from "@/types/post";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  return {
    title: post.title,
    description: post.description,
    twitter: { title: post.title, description: post.description },
    creator: "Tarcisio Andrade",
  };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  ) as Post;

  if (!post) notFound();

  const readTimeTranslate = post.readingTime.text
    .split(" ")[0]
    .concat(" minutos de leitura");

  return (
    <main className="mx-auto max-w-[680px] xl:max-w-6xl px-4 py-48 xl:grid xl:grid-cols-[minmax(400px,_680px)_1fr] xl:gap-20">
      <div>
        <div className="mb-8">
          <time
            dateTime={post.publishedAt}
            className="text-base text-gray-500 mb-4 block"
          >
            {format(parseISO(post.publishedAt), "d/MMM/yyy", {
              locale: ptBR,
            })}
          </time>
          <h1
            id="introduction"
            className="text-4xl lg:text-5xl font-bold scroll-mt-32 leading-tight"
          >
            {post.title}
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400 w-fit rounded">
            <span className="flex gap-2">
              <Timer size={20} className="text-sky-500 dark:text-teal-500" />
              <time>{readTimeTranslate}</time>
            </span>
            <span className="flex gap-2">
              <Tags size={20} className="text-sky-500 dark:text-teal-500" />
              <div>{post.categories.join(", ")}</div>
            </span>
          </div>
        </div>
        <article>
          <MDXRender code={post.body.code} />
        </article>
      </div>
      <MenuToc toc={post.toc} />
    </main>
  );
};

export default PostLayout;
