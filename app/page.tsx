'use client';

import Image from "next/image";
import { CommunityShowcase } from "@/src/ui/post-theme/communityShowCase";

export default function Home() {
  return (
    <div className="font-sans w-full h-full bg-white">
      {/* ナビゲーションヘッダー */}
      <nav className="flex justify-between items-center px-4 py-3 bg-white sticky top-0 z-50 border-b border-gray-100">
        <Image
          src="https://www.mistore.jp/content/dam/isetan_mitsukoshi/ci/common/logo-mi.svg"
          alt="logo"
          width={80}
          height={40}
        />
        <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm">
          ログイン
        </button>
      </nav>

      <main className="flex flex-col">
        {/* ヒーローセクション */}
        <section className="relative w-full px-4 py-12 bg-white">
          <div className="max-w-sm mx-auto text-center">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 mb-6">
                ✨ あなたの趣味を発見
              </div>
            </div>
            <h1 className="text-2xl font-light mb-4 leading-tight text-gray-900">
              好きが見つかる、<br />
              <span className="font-medium">ひろがる</span>
            </h1>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              同じ趣味を持つ人々とつながり、<br />
              新しい発見と体験を共有する
            </p>
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium text-sm">
              今すぐ始める
            </button>
          </div>
        </section>

        {/* コミュニティショーケース */}
        <section className="w-full px-4 py-8 bg-gray-50">
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2 text-gray-900">
              コミュニティ
            </h2>
            <p className="text-sm text-gray-600">
              あなたの興味に合うコミュニティを見つけよう
            </p>
          </div>
          
          <CommunityShowcase />
        </section>

        {/* 人気テーマ */}
        <section className="w-full px-4 py-8">
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2 text-gray-900">
              今話題のテーマ
            </h2>
            <p className="text-sm text-gray-600">
              コミュニティで盛り上がっている最新の話題
            </p>
          </div>

          {/* テーマカード1 */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-800 font-medium text-sm">#夏に纏いたい香水</span>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                Parfum
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format"
                  alt="香水1"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1594736797933-d0a9ba7a2946?w=200&h=200&fit=crop&auto=format"
                  alt="香水2"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="col-span-2 grid grid-cols-3 gap-2">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=150&h=150&fit=crop&auto=format"
                    alt="コスメ1"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556228578-626fdcd1c7e3?w=150&h=150&fit=crop&auto=format"
                    alt="コスメ2"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&auto=format"
                    alt="コスメ3"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-600">SUMMER</div>
                  <div className="text-xs text-gray-400">COLLECTION</div>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop&auto=format"
                  alt="コスメ4"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span>128 コメント</span>
                <span>256 いいね</span>
              </div>
              <button className="text-gray-900 font-medium">
                詳細 →
              </button>
            </div>
          </div>

          {/* テーマカード2 */}
          <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-800 font-medium text-sm">#和菓子の美学</span>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                わがしのわ
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&auto=format"
                  alt="和菓子1"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&auto=format"
                  alt="和菓子2"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="col-span-2 grid grid-cols-3 gap-2">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=150&h=150&fit=crop&auto=format"
                    alt="和菓子3"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&auto=format"
                    alt="和菓子4"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=150&h=150&fit=crop&auto=format"
                    alt="和菓子5"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-600">和の心</div>
                  <div className="text-xs text-gray-400">JAPANESE</div>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format"
                  alt="茶道具"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span>89 コメント</span>
                <span>142 いいね</span>
              </div>
              <button className="text-gray-900 font-medium">
                詳細 →
              </button>
            </div>
          </div>

          <div className="text-center">
            <button className="w-full border border-gray-200 text-gray-900 py-3 rounded-lg font-medium text-sm">
              すべてのテーマを見る
            </button>
          </div>
        </section>

        {/* CTA セクション */}
        <section className="bg-gray-900 text-white px-4 py-12">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-3">
              始めてみませんか？
            </h2>
            <p className="text-sm mb-8 opacity-80">
              無料で今すぐ参加できます
            </p>
            <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium text-sm">
              無料で始める
            </button>
          </div>
        </section>

        {/* フッター */}
        <footer className="bg-white border-t border-gray-100 px-4 py-8">
          <div className="mb-6">
            <Image
              src="https://www.mistore.jp/content/dam/isetan_mitsukoshi/ci/common/logo-mi.svg"
              alt="logo"
              width={80}
              height={40}
              className="mb-3"
            />
            <p className="text-sm text-gray-500">
              好きが見つかる、ひろがる
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-900 text-sm">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#">コミュニティ</a></li>
                <li><a href="#">テーマ</a></li>
                <li><a href="#">イベント</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-gray-900 text-sm">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#">ヘルプ</a></li>
                <li><a href="#">お問い合わせ</a></li>
                <li><a href="#">プライバシー</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-4 text-center">
            <p className="text-xs text-gray-400">&copy; 2024 三越伊勢丹. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
