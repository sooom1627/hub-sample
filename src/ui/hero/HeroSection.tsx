export function HeroSection() {
  return (
    <section className="relative px-2 py-8 overflow-hidden">
      {/* ヒーロー背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-gray-100/90 to-slate-200/80"></div>
      
      {/* 光効果レイヤー */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-gradient-to-tl from-gray-200/40 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* ドットパターン */}
      <div className="absolute inset-0 opacity-8" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(100, 116, 139, 0.25) 1px, transparent 0)',
        backgroundSize: '24px 24px'
      }}></div>
      
      <div className="relative text-center bg-gray-50/80 backdrop-blur-md rounded-2xl p-6">
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-gray-200/90 backdrop-blur-sm rounded-full text-sm text-gray-700 font-medium">
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
        <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors duration-200">
          今すぐ始める
        </button>
      </div>
    </section>
  );
} 