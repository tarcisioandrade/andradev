"use client";

import React, { useCallback, useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { Toc } from "@/types/toc";

type Props = {
  toc: Toc[];
};

const MenuToc = ({ toc }: Props) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const headings = Array.from(document.querySelectorAll("h1, h2, h3"));

    const headingOffsets = headings.map((heading) => {
      if (!heading.id) return;
      const element = document.getElementById(heading.id);
      if (element) {
        return {
          id: heading.id,
          offsetTop: element.offsetTop,
        };
      }
      return null;
    });

    // 180 = 70height HEADER + 80 Scroll margin top + paddings
    const scrollPosition = window.scrollY + 200;

    for (let i = headingOffsets.length - 1; i >= 0; i--) {
      if (!headingOffsets[i]) break;
      if (scrollPosition >= headingOffsets[i]!.offsetTop) {
        setActiveHeading(headingOffsets[i]!.id);
        break;
      } else {
        setActiveHeading(null);
      }
    }
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <aside className="hidden xl:block text-dark dark:text-light rounded-lg sticky top-1 max-h-[80vh] overflow-hidden overflow-y-auto">
      <details open>
        <summary className="mt-[164px] text-md font-semibold cursor-pointer uppercase tracking-widest">
          Tabela de Conteúdo
        </summary>
        <ul className="mt-4 text-base">
          <li className="py-1">
            <a
              href={`#introduction`}
              data-level="one"
              className={cn(
                "flex items-center justify-start text-gray-500 font-medium hover:text-gray-600 dark:hover:text-white transition-colors",
                activeHeading === "introduction" &&
                  "dark:text-teal-500 text-sky-700"
              )}
            >
              Introdução
            </a>
          </li>
          {toc.map(({ slug, level, text }) => {
            const isActive = slug === activeHeading;

            return (
              <li key={`#${slug}`} className="py-1">
                <a
                  href={`#${slug}`}
                  data-level={level}
                  className={cn(
                    "data-[level=two]:pl-2 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start text-gray-500 font-medium hover:text-gray-600 dark:hover:text-white transition-colors",
                    isActive && "dark:text-teal-500 text-sky-700"
                  )}
                >
                  {level === "three" ? (
                    <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                      &nbsp;
                    </span>
                  ) : null}

                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </details>
    </aside>
  );
};

export default MenuToc;
