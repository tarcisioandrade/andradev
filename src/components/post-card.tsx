import { Post } from "@/types/post";
import Link from "next/link";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  return (
    <article>
      <Link className="mb-8" href={post.url}>
        <h2 className="mb-4 text-2xl font-semibold hover:text-blue-500">
          {post.title}
        </h2>
      </Link>
      <p className="text-base leading-relaxed tracking-wide dark:text-gray-200">
        {post.description}
      </p>
      <Link className="mt-4 block font-semibold" href={post.url}>
        Ler Mais
      </Link>
    </article>
  );
}
