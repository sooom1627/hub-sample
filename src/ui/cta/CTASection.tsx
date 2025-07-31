export function CTASection() {
  return (
    <section className="relative px-2 pb-6 overflow-hidden">
      {/* CTA背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-slate-900/90 to-zinc-900/95"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-6 right-8 w-12 h-12 bg-white/15 rounded-full blur-lg"></div>
        <div className="absolute top-12 right-4 w-8 h-8 bg-white/10 rounded-full blur-md"></div>
      </div>
      {/* 星パターン */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative bg-black/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white overflow-hidden">
        {/* CTA内の装飾 */}
        <div className="absolute top-2 right-4 w-12 h-12 bg-white/8 rounded-full blur-lg"></div>
        <div className="absolute bottom-3 left-3 w-8 h-8 bg-white/6 rounded-full blur-md"></div>
        
        <div className="relative">
          <h2 className="text-2xl font-bold mb-3">
            始めてみませんか？
          </h2>
          <p className="text-base mb-6 opacity-90 leading-relaxed">
            無料で今すぐ参加して、<br />
            あなたの趣味の世界を広げよう
          </p>
          <button className="w-full bg-white text-gray-900 py-4 rounded-xl font-bold text-lg">
            無料で始める
          </button>
        </div>
      </div>
    </section>
  );
} 