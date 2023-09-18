import { PostCard } from "@/components/post-card";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const posts = allPosts
  .filter(({ isPublished }) => isPublished)
  .sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

const categories = Array.from(
  new Set(allPosts.map(({ categories }) => categories))
).flat();

export default async function Home() {
  return (
    <main className="py-24 container min-h-[calc(100vh-80px-206px)]">
      <div className="lg:grid lg:grid-cols-[minmax(400px,_630px)_1fr] lg:gap-20">
        <div>
          <p className="uppercase tracking-wider text-lg text-amber-500 font-bold mb-8">
            Publicado Recentemente
          </p>
          <div className="flex flex-col gap-12">
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </div>

        <div className=" mt-16 lg:mt-0">
          <p className="uppercase tracking-wider text-lg text-amber-500 font-bold">
            Categorias
          </p>
          <ul className="flex flex-wrap gap-2 mt-8">
            {categories.map((c) => (
              <li
                className="bg-sky-700 rounded-lg p-2 text-white cursor-pointer hover:bg-sky-800 transition-colors capitalize"
                key={c}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
