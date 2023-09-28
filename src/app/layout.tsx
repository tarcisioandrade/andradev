import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Artigos e tutorias sobre react, typescript, testes e etc.",
  metadataBase: new URL(process.env.DOMAIN_URL as string),
  openGraph: {
    description: "Artigos e tutoriais sobre react, typescript, testes e etc.",
    images: "/op-default-img.png",
    title: "Tarcisio Andrade",
    type: "website",
  },
  themeColor: [
    {
      color: "#fff",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "#0e141b",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  title: "Tarcisio Andrade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
