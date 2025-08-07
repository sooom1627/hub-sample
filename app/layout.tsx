import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/src/ui/header/Header";
import { Footer } from "@/src/ui/footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "三越伊勢丹コミュニティ",
  description: "好きが見つかる、ひろがる。あなたの趣味の世界をもっと豊かに。",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "X-Robots-Tag": "noindex, nofollow, nosnippet, noarchive"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="robots" content="noindex, nofollow, nosnippet, noarchive" />
        <meta name="googlebot" content="noindex, nofollow, nosnippet, noarchive" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-inter w-full min-h-screen bg-gradient-to-br mx-auto relative`}
        style={{
          backgroundColor: "#F6F6F6",
        }}
      >
        <Header />
        <main className="flex flex-col relative max-w-[920px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
