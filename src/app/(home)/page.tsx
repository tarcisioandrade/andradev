import { PostCard } from "@/components/post-card";
import { getUniqueCategories } from "@/utils/get-unique-categories";
import { slugger } from "@/utils/slugger";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

const posts = allPosts
  .filter(({ isPublished }) => isPublished)
  .sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

const categories = getUniqueCategories();

export default async function Home() {
  return (
    <main className="main-container min-h-[calc(100vh-70px-200px+6px)] py-24">
      <div className="lg:grid lg:grid-cols-[minmax(400px,_630px)_1fr] lg:gap-20">
        <div>
          <p className="mb-8 text-lg font-bold uppercase tracking-wider text-blue-600 dark:text-amber-500">
            Publicado Recentemente
          </p>
          <div className="flex flex-col gap-12">
            {posts.map((post, idx) => (
              <PostCard key={idx} post={post} />
            ))}
          </div>
        </div>

        <aside className="mt-16 lg:mt-0">
          <p className="text-lg font-bold uppercase tracking-wider text-blue-600 dark:text-amber-500">
            Categorias
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {categories.map((categ, i) => (
              <li
                className="cursor-pointer rounded-lg bg-blue-600 capitalize text-white transition-colors hover:bg-blue-600/90 dark:bg-amber-500 dark:text-background dark:hover:bg-amber-400"
                key={`${categ}-${i}`}
              >
                <Link
                  className="block p-2"
                  href={`/category/${slugger(categ)}`}
                >
                  {categ}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
