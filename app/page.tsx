'use client';

import Image from "next/image";
import { CommunityShowcase } from "@/src/ui/post-theme/communityShowCase";


export default function Home() {
  return (
    <div className="font-sans w-full h-full mb-64">
      {/* header */}
      <div className="flex justify-center items-center px-10 py-5 border-b border-gray-200">
        <Image
          src="https://www.mistore.jp/content/dam/isetan_mitsukoshi/ci/common/logo-mi.svg"
          alt="logo"
          width={140}
          height={80}
        />
      </div>

      {/* main */}

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Top Visual */}
        <div className="bg-pink-50 w-full h-[320px] flex flex-col items-center justify-center relative">
          <div className="text-center mb-8">
            <p className="text-2xl mb-2">あなたの<span className="font-bold">好き</span>が</p>
            <p className="text-2xl">見つかる、ひろがる。</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
              登録して参加する
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors">
              コミュニティとは
            </button>
          </div>
        </div>

        {/* 好きに出会おう Section */}
        <div className="w-full max-w-6xl mx-auto px-4 py-4">
          <h2 className="text-xl font-bold text-center mb-8">好きに出会おう</h2>
          
          <CommunityShowcase />
        </div>

        {/* theme list */}
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">好きを追求しよう</h2>
            <p className="text-gray-600">コミュニティで今盛り上がっている話題</p>
          </div>

          {/* 夏に纏いたい香水 セクション */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-700 font-medium">#夏に纏いたい香水</span>
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                Parfum
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {/* 上段 */}
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop&auto=format"
                  alt="香水1"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1594736797933-d0a9ba7a2946?w=300&h=300&fit=crop&auto=format"
                  alt="香水2"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* 中段 - 3つの画像 */}
              <div className="col-span-2 grid grid-cols-3 gap-3">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=300&h=300&fit=crop&auto=format"
                    alt="コスメ1"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556228578-626fdcd1c7e3?w=300&h=300&fit=crop&auto=format"
                    alt="コスメ2"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&auto=format"
                    alt="コスメ3"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* 下段 */}
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">KAKI</div>
                  <div className="text-2xl font-bold text-gray-800">GORI</div>
                  <div className="text-xs text-gray-500 mt-1">COLLECTION</div>
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop&auto=format"
                  alt="コスメ4"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 夏に纏いたい香水 セクション（2回目） */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-700 font-medium">#夏に纏いたい香水</span>
              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                わがしのわ
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {/* 上段 */}
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop&auto=format"
                  alt="香水1"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=300&h=300&fit=crop&auto=format"
                  alt="香水2"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* 中段 - 3つの画像 */}
              <div className="col-span-2 grid grid-cols-3 gap-3">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop&auto=format"
                    alt="和菓子1"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&auto=format"
                    alt="和菓子2"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&auto=format"
                    alt="コスメ3"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* 下段 */}
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">KAKI</div>
                  <div className="text-2xl font-bold text-gray-800">GORI</div>
                  <div className="text-xs text-gray-500 mt-1">COLLECTION</div>
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop&auto=format"
                  alt="コスメ4"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 詳細をみるボタン */}
          <div className="text-center">
            <button className="bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors font-medium">
              詳細をみる
            </button>
          </div>
        </div>

        {/* event list */}
      </main>
    </div>
  );
}
