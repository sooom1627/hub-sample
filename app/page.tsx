'use client';

import { Header } from "@/src/ui/header/Header";
import { HeroSection } from "@/src/ui/hero/HeroSection";
import { CommunitySection } from "@/src/ui/community/CommunitySection";
import { ThemesSection } from "@/src/ui/themes/ThemesSection";
import { CTASection } from "@/src/ui/cta/CTASection";
import { Footer } from "@/src/ui/footer/Footer";

export default function Home() {
  return (
    <div className="font-inter w-full min-h-screen bg-gradient-to-br  mx-auto relative">
      <Header />
      <main className="flex flex-col relative bg-white max-w-[920px] mx-auto">
        <HeroSection />
        <CommunitySection />
        <ThemesSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
