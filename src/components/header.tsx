"use client";

import { cn } from "@/utils/cn";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  const isBlogPage = pathname !== "/";

  // O suporte para darkmode com html.class não estava funcionando na lib usada pra o code syntax highligh (Bright), por esse motivo usei o  atributo "data-theme" no htmlElement. https://bright.codehike.org/
  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <div
      className={cn(
        "h-[70px] bg-sky-950",
        isBlogPage && "fixed right-0 left-0 z-50 bg-white dark:bg-background"
      )}
    >
      <header className="container flex items-center justify-between h-full">
        <Link href="/" className="text-2xl text-white">
          Tarcisio Andrade
        </Link>

        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 hover:bg-sky-900 text-white h-10 px-4 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
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
