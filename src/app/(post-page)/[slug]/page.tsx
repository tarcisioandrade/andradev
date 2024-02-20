import ButtonScrollTop from "@/components/button-scroll-top";
import CategoryLink from "@/components/category-link";
import MDXRender from "@/components/mdx-render";
import MenuToc from "@/components/menu-toc";
import { allBlogPosts } from "@/utils/all-blog-posts";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Tags, Timer } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allBlogPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = allBlogPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    notFound();
  }

  const opImage = post.image.filePath.replaceAll("../public", "");

  return {
    description: post.description,
    openGraph: {
      description: post.description,
      images: opImage,
      publishedTime: post.publishedAt,
      title: post.title,
      type: "article",
    },
    title: post.title,
    twitter: { description: post.description, title: post.title },
  };
};

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = allBlogPosts .find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    notFound();
  }

  const readTimeTranslate = post.readingTime.text
    .split(" ")[0]
    .concat(" minutos de leitura");

  return (
    <main className="main-container mx-auto px-4 py-24 xl:grid xl:grid-cols-[minmax(400px,_680px)_1fr] xl:gap-20 xl:py-36">
      <div>
        <div className="mb-8">
          <time
            className="mb-4 block text-base text-gray-500"
            dateTime={post.publishedAt}
          >
            {format(
              parseISO(post.publishedAt).setUTCHours(3),
              "EEEE, dd 'de' LLLL 'de' yyyy",
              {
                locale: ptBR,
              },
            )}
          </time>
          <h1
            className="scroll-mt-32 text-4xl font-bold leading-tight lg:text-5xl"
            id="introduction"
          >
            {post.title}
          </h1>
          <ul className="mt-4 flex w-fit flex-col gap-4 rounded text-sm text-gray-500 dark:text-gray-400 md:flex-row xl:gap-8">
            <li className="flex gap-1">
              <Timer className="text-blue-500 dark:text-amber-500" size={20} />
              <time>{readTimeTranslate}</time>
            </li>
            <li className="flex gap-1">
              <Tags className="text-blue-500 dark:text-amber-500" size={20} />
              <CategoryLink categories={post.categories} />
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

export default PostPage;
