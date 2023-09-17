import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDXRender from "@/components/mdx-render";
import MenuToc from "@/components/menu-toc";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-6xl px-4 py-24">
      <div className="lg:grid lg:grid-cols-[minmax(400px,_700px)_1fr] lg:gap-20">
        <div>
          <div className="mb-8">
            <h1
              id="intro"
              className="text-4xl lg:text-5xl font-bold scroll-mt-32 leading-tight"
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
              <time dateTime={post.publishedAt}>
                {format(parseISO(post.publishedAt), "d MMMM yyyy", {
                  locale: ptBR,
                })}
              </time>
              <span>-</span>
              <span>{post.readingTime.text}</span>
            </div>
          </div>
          <MDXRender code={post.body.code} />
        </div>
        <MenuToc toc={post.toc} />
      </div>
    </article>
  );
};

export default PostLayout;
