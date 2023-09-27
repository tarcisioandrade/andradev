"use client";

import React, { useCallback, useEffect, useState } from "react";
import useThrottledFunction from "@/hooks/useThrottledFunction";
import { cn } from "@/utils/cn";
import { ChevronUp } from "lucide-react";

const goScrollToTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

const ButtonScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

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
        "fixed bottom-4 right-4 hidden rounded-xl bg-slate-200 p-2 text-blue-500 dark:bg-gray-900 dark:text-amber-500",
        showButton && "block",
      )}
      onClick={goScrollToTop}
    >
      <ChevronUp />
    </div>
  );
};

export default ButtonScrollTop;
