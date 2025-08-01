export function HeroSection() {
  return (
    <section className="relative md:py-8 overflow-hidden bg-white">
      <div className="relative flex flex-col justify-between items-center md:flex-row text-center bg-gray-300/50 backdrop-blur-md md:rounded-2xl p-6">
        <div className="md:w-2/3">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 backdrop-blur-sm rounded-full text-sm text-gray-700 font-medium">
              ✨ あなたの趣味を発見
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight text-gray-900">
            好きが見つかる、
            <br />
            ひろがる
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            同じ趣味を持つ人々とつながり、
            <br />
            新しい発見と体験を共有する
          </p>
        </div>
        <div className="flex justify-center md:w-1/3">
          <button className="w-full h-fit bg-emerald-600 text-white py-4 px-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200">
            今すぐ始める
          </button>
        </div>
      </div>
    </section>
  );
}
