import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-slate-100 py-9 shadow-md dark:bg-gray-800 sm:h-[200px]">
      <footer className="main-container flex h-full flex-col justify-around gap-12 sm:flex-row sm:justify-between sm:gap-0">
        <div className="flex flex-col gap-4">
          <Link className="text-2xl" href="/">
            Tarcisio Andrade
          </Link>
          <span className="hidden tracking-tight text-gray-600 dark:text-gray-400 sm:block">
            © {new Date().getFullYear()}, Tarcisio Andrade
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="tracking-tight text-gray-600 dark:text-gray-400">
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
                href="https://tfandrade.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                Portfólio
              </Link>
            </li>
          </ul>
        </div>
        <span className="tracking-tight text-gray-600 dark:text-gray-400 sm:hidden">
          © {new Date().getFullYear()}, Tarcisio Andrade
        </span>
      </footer>
    </div>
  );
};

export default Footer;
