import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDXRender from "@/components/mdx-render";
import MenuToc from "@/components/menu-toc";
import { Metadata } from "next";
import { Timer, Tags } from "lucide-react";
import { Post } from "@/types/post";
import Link from "next/link";
import { slugger } from "@/utils/slugger";
import ButtonScrollTop from "@/components/button-scroll-top";

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
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
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
    <main className="mx-auto main-container px-4 py-24 xl:py-36 xl:grid xl:grid-cols-[minmax(400px,_680px)_1fr] xl:gap-20">
      <div>
        <div className="mb-8">
          <time
            dateTime={post.publishedAt}
            className="text-base text-gray-500 mb-4 block"
          >
            {format(
              parseISO(post.publishedAt),
              "EEEE, dd 'de' LLLL 'de' yyyy",
              {
                locale: ptBR,
              }
            )}
          </time>
          <h1
            id="introduction"
            className="text-4xl lg:text-5xl font-bold scroll-mt-32 leading-tight"
          >
            {post.title}
          </h1>
          <ul className="flex flex-col md:flex-row gap-4 xl:gap-8 mt-4 text-sm text-gray-500 dark:text-gray-400 w-fit rounded">
            <li className="flex gap-1">
              <Timer size={20} className="text-blue-500 dark:text-amber-500" />
              <time>{readTimeTranslate}</time>
            </li>
            <li className="flex gap-1">
              <Tags size={20} className="text-blue-500 dark:text-amber-500" />
              <div>
                {post.categories.map((categ, i) => (
                  <span key={`${categ}-${i}`}>
                    <Link
                      className="capitalize text-blue-500 hover:underline underline-offset-4"
                      href={`/category/${slugger(categ)}`}
                    >
                      {categ}
                    </Link>
                    {i < post.categories.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </li>
          </ul>
        </div>
        <article>
          <MDXRender code={post.body.code} />
        </article>
      </div>
      <MenuToc toc={post.toc} />

      <ButtonScrollTop />
    </main>
  );
};

export default PostLayout;
