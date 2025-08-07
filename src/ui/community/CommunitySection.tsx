import { CommunityShowcase } from "@/src/ui/post-theme/communityShowCase";

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden max-w-[920px] w-full mx-auto">
      <div className="relative backdrop-blur-sm rounded-2xl p-4 pt-6">
        <div className="mb-6 flex flex-col items-center md:gap-2">
          <h2 className="text-2xl font-bold mb-1 text-gray-900">
            好きに出会おう
          </h2>
          <p className="text-base text-gray-600">
            あなたの興味に合うコミュニティを見つけよう
          </p>
        </div>
        
        <CommunityShowcase />
      </div>
    </section>
  );
} 