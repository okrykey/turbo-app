import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "monorepo-app",
  description:
    "This application was meticulously architected using a monorepo approach",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
