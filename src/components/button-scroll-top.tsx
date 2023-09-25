"use client";

import useThrottledFunction from "@/hooks/useThrottledFunction";
import { cn } from "@/utils/cn";
import { ChevronUp } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

const ButtonScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  const goScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShowButton = useCallback(() => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowSize = window.innerWidth;

    if (windowSize > 1024) {
      setShowButton(false);
      return;
    }

    const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

    if (scrollPercentage >= 14) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, []);

  const { throttledFn: handleShowButtonThrottled } = useThrottledFunction({
    callbackFn: handleShowButton,
    throttleMs: 500,
  });

  useEffect(() => {
    window.addEventListener("scroll", handleShowButtonThrottled);
    window.addEventListener("resize", handleShowButton);

    return () => {
      window.removeEventListener("scroll", handleShowButtonThrottled);
      window.removeEventListener("resize", handleShowButton);
    };
  }, [handleShowButtonThrottled, handleShowButton]);

  return (
    <div
      className={cn(
        "hidden bg-slate-200 dark:bg-gray-900 rounded-xl fixed right-4 bottom-4 p-2 text-blue-500 dark:text-amber-500",
        showButton && "block"
      )}
      onClick={goScrollToTop}
    >
      <ChevronUp />
    </div>
  );
};

export default ButtonScrollTop;
