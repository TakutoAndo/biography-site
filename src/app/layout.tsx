import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "プロフィールサイト",
  description: "転職活動用のプロフィールサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
