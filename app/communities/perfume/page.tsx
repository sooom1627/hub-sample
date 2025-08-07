'use client';

import { Header } from "@/src/ui/header/Header";
import { HomePageLayout } from "@/src/components/layout/HomePageLayout";
import { Footer } from "@/src/ui/footer/Footer";
import Image from "next/image";

export default function PerfumeCommunityPage() {
  const communityPosts = [
    {
      id: 1,
      title: "秋の新作フレグランス情報まとめ",
      content: "秋に向けて各ブランドから発表された新作フレグランスをまとめました。ウッディ系やスパイシー系の香りが豊富で楽しみです♪",
      author: "フレグランス・コレクター",
      createdAt: "2024-08-07",
      likes: 43,
      comments: 16
    },
    {
      id: 2,
      title: "香水の正しい付け方について質問",
      content: "香水初心者です。どこに、どのタイミングで付けるのが正しいのでしょうか？長持ちさせるコツも知りたいです。",
      author: "香水デビュー",
      createdAt: "2024-08-06",
      likes: 35,
      comments: 21
    },
    {
      id: 3,
      title: "シャネルのクラシック香水の魅力",
      content: "シャネル No.5を久しぶりに付けて、改めてその魅力を感じました。時代を超えて愛され続ける理由について語りませんか？",
      author: "クラシック愛好家",
      createdAt: "2024-08-05",
      likes: 38,
      comments: 14
    }
  ];

  return (
    <HomePageLayout>
      <Header />
      <main className="flex flex-col relative max-w-[920px] mx-auto px-4">
        <div className="py-8">
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl p-8 mb-8 text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/isetan_parfun_92x61.png"
                alt="香水"
                width={120}
                height={80}
                className="rounded-lg aspect-[92/61] object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Parfun
            </h1>
            <p className="text-gray-600 mb-4">
              香水や香水文化に魅せられし人々のつどい香水コミュニティ
            </p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
              <span>メンバー数: 2,789人</span>
              <span>投稿数: 1,987件</span>
              <span>今日の投稿: 9件</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">最新の投稿</h2>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors">
              投稿する
            </button>
          </div>
          
          <div className="space-y-6">
            {communityPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                    Parfun
                  </span>
                  <span className="text-xs text-gray-500">
                    {post.createdAt}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {post.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    投稿者: {post.author}
                  </span>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </HomePageLayout>
  );
}