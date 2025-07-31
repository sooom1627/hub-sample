'use client';

import { Header } from "@/src/ui/header/Header";
import { HeroSection } from "@/src/ui/hero/HeroSection";
import { CommunitySection } from "@/src/ui/community/CommunitySection";
import { ThemesSection } from "@/src/ui/themes/ThemesSection";
import { CTASection } from "@/src/ui/cta/CTASection";
import { Footer } from "@/src/ui/footer/Footer";

export default function Home() {
  return (
    <div className="font-sans w-full min-h-screen bg-gradient-to-br from-gray-50 via-slate-50/50 to-zinc-50/30 relative">
      {/* 背景装飾 */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gray-200/30 to-slate-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-8 w-24 h-24 bg-gradient-to-r from-zinc-200/30 to-gray-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-6 w-28 h-28 bg-gradient-to-r from-slate-200/30 to-zinc-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-60 right-12 w-20 h-20 bg-gradient-to-r from-gray-200/30 to-slate-200/30 rounded-full blur-lg"></div>
      </div>

      <Header />

      <main className="flex flex-col relative">
        <HeroSection />
        <CommunitySection />
        <ThemesSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
