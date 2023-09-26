import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.DOMAIN_URL as string),
  title: "Tarcisio Andrade Blog",
  description: "Artigos sobre react, typescript, testes e etc.",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#fff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0e141b",
    },
  ],
  openGraph: {
    type: "website",
    description: "Artigos e tutoriais sobre react, typescript, testes e etc.",
    title: "Tarcisio Andrade Blog",
  },
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
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
