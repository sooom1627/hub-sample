import { FooterHeader } from "./FooterHeader";
import { FooterNavSection } from "./FooterNavSection";
import { FooterCopyright } from "./FooterCopyright";

export function Footer() {
  return (
    <footer className="relative px-4 md:px-0">
      <div className="relative mx-auto mb-6 max-w-[920px] w-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 overflow-hidden border border-gray-100">
        <FooterHeader />
        <FooterNavSection />
        <FooterCopyright />
      </div>
    </footer>
  );
} 