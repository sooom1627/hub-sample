import { CommunityShowcase } from "@/src/ui/post-theme/communityShowCase";

export function CommunitySection() {
  return (
    <section className="relative px-2 py-6 overflow-hidden">
      {/* コミュニティ背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-gray-50/70 to-zinc-50/60"></div>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-6 right-6 w-24 h-24 bg-slate-300/50 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gray-300/50 rounded-full blur-lg"></div>
      </div>
      {/* 波パターン */}
      <div className="absolute inset-0 opacity-8" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            コミュニティ
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            あなたの興味に合うコミュニティを<br />
            見つけよう
          </p>
        </div>
        
        <CommunityShowcase />
        
        <div className="mt-4">
          <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium text-base">
            すべて見る
          </button>
        </div>
      </div>
    </section>
  );
} 