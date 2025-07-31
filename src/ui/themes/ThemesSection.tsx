import Image from "next/image";

export function ThemesSection() {
  return (
    <section className="relative pb-6 overflow-hidden">
      <div className="relative bg-white/70 backdrop-blur-sm">
        <div className="mb-6 px-4 py-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            今話題のテーマ
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            コミュニティで盛り上がっている
            <br />
            最新の話題をチェック
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {/* テーマカード1 */}
          <div className="relative bg-gradient-to-br from-blue-50/50 to-blue-50/70 backdrop-blur-sm px-4 py-8 overflow-hidden">
            <p className="absolute top-4 left-4 text-blue-300 text-5xl">#</p>
            {/* カード内装飾 */}
            <div className="absolute top-2 right-2 w-8 h-8 bg-gray-300/30 rounded-full blur-md"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 bg-slate-300/30 rounded-full blur-sm"></div>

            <div className="relative p-2">
              <div className=" flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 ml-2">
                  夏に纏いたい香水
                </h3>
                <span className="bg-white/95 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                  Parfum
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format"
                    alt="香水1"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1594736797933-d0a9ba7a2946?w=200&h=200&fit=crop&auto=format"
                    alt="香水2"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="col-span-2 grid grid-cols-3 gap-2">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=150&h=150&fit=crop&auto=format"
                      alt="コスメ1"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1556228578-626fdcd1c7e3?w=150&h=150&fit=crop&auto=format"
                      alt="コスメ2"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&auto=format"
                      alt="コスメ3"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="aspect-square rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-700">
                      SUMMER
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      COLLECTION
                    </div>
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop&auto=format"
                    alt="コスメ4"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  もっと見る
                </button>
              </div>
            </div>
          </div>

          {/* テーマカード2 */}
          <div className="bg-gradient-to-br from-orange-50/40 to-orange-100/70 backdrop-blur-sm py-8 px-4 relative overflow-hidden">
            {/* カード内装飾 */}
            <p className="absolute top-4 left-3 text-orange-200 text-5xl">#</p>

            <div className="relative p-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  和菓子の美学
                </h3>
                <span className="bg-white/95 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                  わがしのわ
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&auto=format"
                    alt="和菓子1"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&auto=format"
                    alt="和菓子2"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="col-span-2 grid grid-cols-3 gap-2">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=150&h=150&fit=crop&auto=format"
                      alt="和菓子3"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&auto=format"
                      alt="和菓子4"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=150&h=150&fit=crop&auto=format"
                      alt="和菓子5"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="aspect-square rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-700">
                      和の心
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      JAPANESE
                    </div>
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format"
                    alt="茶道具"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  もっと見る
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
