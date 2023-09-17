import { allPosts, Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <span>{post.readingTime.text}</span>
      <time
        dateTime={post.publishedAt}
        className="mb-2 block text-xs text-gray-600"
      >
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>
      <p className="leading-4">{post.description}</p>
    </div>
  );
}
