export function HeroSection() {
  return (
    <section className="relative px-2 py-8 overflow-hidden">
      {/* ヒーロー背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-50/80 to-slate-50/70"></div>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-4 left-8 w-16 h-16 bg-gray-300/50 rounded-full blur-xl"></div>
        <div className="absolute top-12 right-12 w-12 h-12 bg-slate-300/50 rounded-full blur-lg"></div>
        <div className="absolute bottom-8 left-16 w-20 h-20 bg-zinc-300/40 rounded-full blur-xl"></div>
      </div>
      {/* ドットパターン */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(100, 116, 139, 0.3) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="relative text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6">
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-gray-100/90 backdrop-blur-sm rounded-full text-sm text-gray-700 font-medium">
            ✨ あなたの趣味を発見
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4 leading-tight text-gray-900">
          好きが見つかる、<br />
          ひろがる
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          同じ趣味を持つ人々とつながり、<br />
          新しい発見と体験を共有する
        </p>
        <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg">
          今すぐ始める
        </button>
      </div>
    </section>
  );
} 