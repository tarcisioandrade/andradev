import { Post } from "@/types/post";
import Link from "next/link";

export function PostCard(post: Post) {
  return (
    <article className=" group">
      <Link className="mb-8" href={post.url}>
        <h2 className="mb-4 text-2xl font-semibold group-hover:text-blue-500">
          {post.title}
        </h2>
        <p className="text-base tracking-wide leading-relaxed dark:text-gray-200">
          {post.description}
        </p>
        <p className="mt-4 group-hover:underline underline-offset-4 group-hover:text-blue-500 font-semibold">
          Ler Mais
        </p>
      </Link>
    </article>
  );
}
