import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-20 bg-sky-950">
      <header className="max-w-[1152px] px-4 mx-auto flex items-center justify-between h-full">
        <Link href="/" className="text-2xl">
          Tarcisio Andrade
        </Link>
        <a href=".">Menu</a>
      </header>
    </div>
  );
};

export default Header;
