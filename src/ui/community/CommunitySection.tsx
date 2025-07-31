import { CommunityShowcase } from "@/src/ui/post-theme/communityShowCase";

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden max-w-[920px] w-full mx-auto">
      {/* コミュニティ背景装飾 */}
      <div className="absolute inset-0 "></div>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-6 right-6 w-24 h-24 bg-slate-300/50 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gray-300/50 rounded-full blur-lg"></div>
      </div>

      <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 pt-6">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:gap-4 items-start">
          <h2 className="text-2xl font-bold mb-1 text-gray-900 border-l-2 border-emerald-600 pl-2">
            コミュニティ
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