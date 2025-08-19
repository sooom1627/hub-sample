import { HeroSection } from "@/src/ui/hero/HeroSection";
import { CommunitySection } from "@/src/ui/community/CommunitySection";
import { ThemesSection } from "@/src/ui/themes/ThemesSection";
import { EventList } from "@/src/ui/event-list/EventList";
import { CTASection } from "@/src/ui/cta/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CommunitySection />
      <ThemesSection communityId="" />
      <EventList communityId="" />
      <CTASection />
    </>
  );
}
