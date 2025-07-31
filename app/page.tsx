'use client';

import Image from "next/image";
import { CommunityShowcase } from "@/src/ui/post-theme/communityShowCase";

export default function Home() {
  return (
    <div className="font-sans w-full h-full bg-gradient-to-br from-gray-50 via-slate-50/50 to-zinc-50/30 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gray-200/30 to-slate-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-8 w-24 h-24 bg-gradient-to-r from-zinc-200/30 to-gray-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-6 w-28 h-28 bg-gradient-to-r from-slate-200/30 to-zinc-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-60 right-12 w-20 h-20 bg-gradient-to-r from-gray-200/30 to-slate-200/30 rounded-full blur-lg"></div>
      </div>

      {/* ナビゲーションヘッダー */}
      <nav className="flex justify-between items-center px-2 py-3 bg-white/95 backdrop-blur-sm sticky top-0 z-50 relative">
        <Image
          src="https://www.mistore.jp/content/dam/isetan_mitsukoshi/ci/common/logo-mi.svg"
          alt="logo"
          width={100}
          height={50}
        />
        <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium">
          ログイン
        </button>
      </nav>

      <main className="flex flex-col relative">
        {/* ヒーローセクション */}
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

        {/* コミュニティショーケース */}
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

        {/* 人気テーマ */}
        <section className="relative px-2 pb-6 overflow-hidden">
          {/* テーマ背景装飾 */}
          <div className="absolute inset-0 bg-gradient-to-bl from-zinc-50/80 via-slate-50/70 to-gray-50/60"></div>
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-8 left-8 w-20 h-20 bg-zinc-300/50 rounded-full blur-xl"></div>
            <div className="absolute bottom-12 right-6 w-14 h-14 bg-slate-300/50 rounded-full blur-lg"></div>
            <div className="absolute top-20 right-16 w-10 h-10 bg-gray-300/50 rounded-full blur-md"></div>
          </div>
          {/* ヘックスパターン */}
          <div className="absolute inset-0 opacity-6" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23475569' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpolygon points='13.99 9.25 13.99 1.75 21.74 6.0 21.74 13.5'/%3E%3Cpolygon points='13.99 39.25 13.99 31.75 21.74 36.0 21.74 43.5'/%3E%3Cpolygon points='14.01 24.25 14.01 16.75 21.76 21.0 21.76 28.5'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>

          <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-2">
            <div className="mb-6 p-4">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                今話題のテーマ
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                コミュニティで盛り上がっている<br />
                最新の話題をチェック
              </p>
            </div>

            {/* テーマカード1 */}
            <div className="bg-gradient-to-br from-gray-100/90 to-slate-100/70 backdrop-blur-sm rounded-2xl p-2 mb-4 relative overflow-hidden">
              {/* カード内装飾 */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-gray-300/30 rounded-full blur-md"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-slate-300/30 rounded-full blur-sm"></div>
              
              <div className="relative p-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">#夏に纏いたい香水</h3>
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
                      <div className="text-lg font-bold text-gray-700">SUMMER</div>
                      <div className="text-xs text-gray-500 font-medium">COLLECTION</div>
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
            <div className="bg-gradient-to-br from-slate-100/90 to-zinc-100/70 backdrop-blur-sm rounded-2xl p-2 mb-6 relative overflow-hidden">
              {/* カード内装飾 */}
              <div className="absolute top-3 left-3 w-6 h-6 bg-slate-300/30 rounded-full blur-sm"></div>
              <div className="absolute bottom-3 right-3 w-8 h-8 bg-zinc-300/30 rounded-full blur-md"></div>
              
              <div className="relative p-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">#和菓子の美学</h3>
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
                      <div className="text-lg font-bold text-gray-700">和の心</div>
                      <div className="text-xs text-gray-500 font-medium">JAPANESE</div>
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

            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-base">
              すべてのテーマを見る
            </button>
          </div>
        </section>

        {/* CTA セクション */}
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

        {/* フッター */}
        <footer className="relative mx-2 mb-4 rounded-2xl p-4 overflow-hidden">
          {/* フッター背景装飾 */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-50/80 to-slate-50/70"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-10 h-10 bg-gray-300/60 rounded-full blur-lg"></div>
            <div className="absolute bottom-3 left-6 w-6 h-6 bg-slate-300/60 rounded-full blur-md"></div>
          </div>
          {/* グリッドパターン */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>

          <div className="relative">
            <div className="mb-6">
              <Image
                src="https://www.mistore.jp/content/dam/isetan_mitsukoshi/ci/common/logo-mi.svg"
                alt="logo"
                width={100}
                height={50}
                className="mb-3"
              />
              <p className="text-base text-gray-600 leading-relaxed">
                好きが見つかる、ひろがる。<br />
                あなたの趣味の世界をもっと豊かに。
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-3 text-gray-900 text-base">サービス</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="block py-1">コミュニティ</a></li>
                  <li><a href="#" className="block py-1">テーマ</a></li>
                  <li><a href="#" className="block py-1">イベント</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-gray-900 text-base">サポート</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="block py-1">ヘルプ</a></li>
                  <li><a href="#" className="block py-1">お問い合わせ</a></li>
                  <li><a href="#" className="block py-1">プライバシー</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-4 text-center">
              <p className="text-sm text-gray-500">&copy; 2024 三越伊勢丹. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
