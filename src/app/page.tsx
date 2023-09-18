import { PostCard } from "@/components/post-card";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default async function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );
  console.log("posts", posts[0].toc);

  return (
    <main className="px-4 py-24 max-w-[1152px] mx-auto min-h-[calc(100vh-80px-206px)]">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </main>
  );
}
