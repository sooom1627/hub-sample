import { HeroSection } from "@/src/ui/hero/HeroSection";
import { CommunitySection } from "@/src/ui/community/CommunitySection";
import { ThemesSection } from "@/src/ui/themes/ThemesSection";
import { EventList } from "@/src/ui/event-list/EventList";
import { CTASection } from "@/src/ui/cta/CTASection";
import { Footer } from "@/src/ui/footer/Footer";

export function MainContent() {
  return (
    <main className="flex flex-col relative max-w-[920px] mx-auto">
      <HeroSection />
      <CommunitySection />
      <ThemesSection />
      <EventList />
      <CTASection />
      <Footer />
    </main>
  );
}