import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <main className="main-container mt-[150px] flex h-screen w-full justify-center md:mt-0 md:items-center">
      <div>
        <h1 className="mb-9 text-5xl font-bold md:mb-14 md:text-6xl">
          Página não encontrada ☹️
        </h1>
        <Link
          className="flex items-center gap-2 text-lg text-blue-600 md:text-4xl"
          href="/"
        >
          Voltar a página inicial
          <ArrowRight />
        </Link>
      </div>
    </main>
  );
}
