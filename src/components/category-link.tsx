import React from "react";
import { slugger } from "@/utils/slugger";
import Link from "next/link";

type Props = {
  categories: string[];
};

const CategoryLink = ({ categories }: Props) => {
  return (
    <div>
      {categories.map((categ, i) => (
        <span key={`${categ}-${i}`}>
          <Link
            className="capitalize text-blue-500 underline-offset-4 hover:underline"
            href={`/category/${slugger(categ)}`}
          >
            {categ}
          </Link>
          {i < categories.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
};

export default CategoryLink;
