"use client";

import React, { useCallback, useEffect, useState } from "react";
import useThrottledFunction from "@/hooks/useThrottledFunction";
import { Toc } from "@/types/toc";
import { cn } from "@/utils/cn";

type Props = {
  toc: Toc[];
};

const TocItem = ({ toc }: Props) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const headings = Array.from(document.querySelectorAll("h1, h2, h3"));

    const headingOffsets = headings.map((heading) => {
      if (!heading.id) {
        return;
      }
      const element = document.getElementById(heading.id);
      if (element) {
        return {
          id: heading.id,
          offsetTop: element.offsetTop,
        };
      }
      return null;
    });

    // 240 = 70height HEADER + 80 Scroll margin top + (24h + 16padding) data do post + paddings
    const scrollPosition = window.scrollY + 240;

    for (let i = headingOffsets.length - 1; i >= 0; i--) {
      if (!headingOffsets[i]) {
        break;
      }
      if (scrollPosition >= headingOffsets[i]!.offsetTop) {
        setActiveHeading(headingOffsets[i]!.id);
        break;
      } else {
        setActiveHeading(null);
      }
    }
  }, []);

  const { throttledFn: handleScrollThrottled } = useThrottledFunction({
    callbackFn: handleScroll,
    throttleMs: 100,
  });

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScrollThrottled);

    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, [handleScroll, handleScrollThrottled]);

  return (
    <ul className="mt-4 text-base">
      <li className="py-1">
        <a
          className={cn(
            "flex items-center justify-start font-medium text-gray-500 transition-colors hover:text-blue-600 dark:hover:text-amber-500",
            activeHeading === "introduction" &&
              "text-blue-600 dark:text-amber-500",
          )}
          data-level="one"
          href={`#introduction`}
        >
          Introdução
        </a>
      </li>
      {toc.map(({ level, slug, text }) => {
        const isActive = slug === activeHeading;

        return (
          <li className="py-1" key={`#${slug}`}>
            <a
              className={cn(
                "flex items-center justify-start font-medium text-gray-500 transition-colors hover:text-blue-600 data-[level=three]:pl-4 data-[level=two]:pl-2 dark:hover:text-amber-500 sm:data-[level=three]:pl-6",
                isActive && "text-blue-600 dark:text-amber-500",
              )}
              data-level={level}
              href={`#${slug}`}
            >
              {level === "three" ? (
                <span className="bg-dark mr-2 flex h-1 w-1 rounded-full">
                  &nbsp;
                </span>
              ) : null}

              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TocItem;
