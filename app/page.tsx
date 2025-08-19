import { HeroSection } from "@/src/ui/hero/HeroSection";
import { CommunitySection } from "@/src/ui/community/CommunitySection";
import { ThemesSection } from "@/src/ui/themes/ThemesSection";
import { EventList } from "@/src/ui/event-list/EventList";
import { CTASection } from "@/src/ui/cta/CTASection";
import { AnimatedSection } from "@/src/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <AnimatedSection delay={100}>
        <CommunitySection />
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <ThemesSection communityId="" />
      </AnimatedSection>
      
      <AnimatedSection delay={300}>
        <EventList communityId="" />
      </AnimatedSection>
      
      <AnimatedSection delay={400}>
        <CTASection />
      </AnimatedSection>
    </>
  );
}
