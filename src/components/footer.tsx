import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-100 dark:bg-gray-800 shadow-md sm:h-[200px] py-9">
      <footer className="h-full main-container flex flex-col gap-12 sm:gap-0 sm:flex-row justify-around sm:justify-between">
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-2xl">
            Tarcisio Andrade
          </Link>
          <span className="hidden sm:block text-gray-600 dark:text-gray-400 tracking-tight">
            © 2023, Tarcisio Andrade
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-gray-600 dark:text-gray-400 tracking-tight">
            Links
          </span>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="mailto:tarcisioandrade016@gmail.com"
                rel="noopener noreferrer"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/tarcisioandrade"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://tfandrade.netlify.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                Portfólio
              </Link>
            </li>
          </ul>
        </div>
        <span className="sm:hidden text-gray-600 dark:text-gray-400 tracking-tight">
          © 2023, Tarcisio Andrade
        </span>
      </footer>
    </div>
  );
};

export default Footer;
