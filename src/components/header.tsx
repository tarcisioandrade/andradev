"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  const isBlogPage = pathname !== "/" && !pathname.includes("category");

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div
      className={cn(
        "h-[70px] bg-white shadow-md shadow-slate-100 dark:bg-background dark:shadow-black/10",
        isBlogPage && "xl:fixed xl:left-0 xl:right-0 xl:z-50",
      )}
    >
      <header className="main-container flex h-full items-center justify-between">
        <Link className="text-2xl" href="/">
          Tarcisio Andrade
        </Link>

        <button
          className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium ring-offset-white hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-slate-950 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:hover:bg-white/10 dark:focus-visible:ring-slate-300"
          onClick={handleTheme}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </header>
    </div>
  );
};

export default Header;
