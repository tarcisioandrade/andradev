"use client";

import { cn } from "@/utils/cn";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
        "h-[70px] bg-white dark:bg-background shadow-md shadow-slate-100 dark:shadow-black/10",
        isBlogPage && "xl:fixed xl:right-0 xl:left-0 xl:z-50"
      )}
    >
      <header className="main-container flex items-center justify-between h-full">
        <Link href="/" className="text-2xl">
          Tarcisio Andrade
        </Link>

        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 h-10 px-4 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
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
