import { PostCard } from "@/components/post-card";
import { slugger } from "@/utils/slugger";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

const posts = allPosts
  .filter(({ isPublished }) => isPublished)
  .sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

const allCategoriesPosts = allPosts.map(({ categories }) => categories);
const uniqueCategories = new Set<string>();

allCategoriesPosts.flat().map((cat) => uniqueCategories.add(cat));

const categories = Array.from(uniqueCategories);

export default async function Home() {
  return (
    <main className="py-24 container min-h-[calc(100vh-80px-206px)]">
      <div className="lg:grid lg:grid-cols-[minmax(400px,_630px)_1fr] lg:gap-20">
        <div>
          <p className="uppercase tracking-wider text-lg text-blue-500 dark:text-amber-500 font-bold mb-8">
            Publicado Recentemente
          </p>
          <div className="flex flex-col gap-12">
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-0">
          <p className="uppercase tracking-wider text-lg text-blue-500 dark:text-amber-500 font-bold">
            Categorias
          </p>
          <ul className="flex flex-wrap gap-2 mt-8">
            {categories.map((categ) => (
              <li
                className="bg-blue-500 dark:bg-amber-500 text-white dark:text-background rounded-lg p-2 cursor-pointer hover:bg-blue-500/90 dark:hover:bg-amber-400 transition-colors capitalize"
                key={categ}
              >
                <Link href={`/category/${slugger(categ)}`}>{categ}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
