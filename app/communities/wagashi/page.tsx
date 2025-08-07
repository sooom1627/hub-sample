'use client';

import { Header } from "@/src/ui/header/Header";
import { HomePageLayout } from "@/src/components/layout/HomePageLayout";
import { Footer } from "@/src/ui/footer/Footer";
import Image from "next/image";

export default function WagashiCommunityPage() {
  const communityPosts = [
    {
      id: 1,
      title: "夏の涼菓子おすすめ教えてください",
      content: "暑い日が続きますが、みなさんのおすすめの涼菓子を教えてください。葛切りや水羊羹以外にも知らないものがあれば知りたいです！",
      author: "涼菓子探求者",
      createdAt: "2024-08-07",
      likes: 38,
      comments: 25
    },
    {
      id: 2,
      title: "老舗和菓子店の職人技に感動",
      content: "先日、京都の老舗和菓子店を訪れました。職人さんの技術と和菓子への愛情に心を打たれました。皆さんのおすすめの老舗店も教えてください。",
      author: "和菓子職人見習い",
      createdAt: "2024-08-06",
      likes: 42,
      comments: 19
    },
    {
      id: 3,
      title: "季節の和菓子作りに挑戦してみました",
      content: "自宅で桜餅を作ってみました！思ったより難しかったですが、とても楽しかったです。初心者におすすめのレシピがあれば教えてください♪",
      author: "和菓子作り初心者",
      createdAt: "2024-08-05",
      likes: 33,
      comments: 28
    }
  ];

  return (
    <HomePageLayout>
      <Header />
      <main className="flex flex-col relative max-w-[920px] mx-auto px-4">
        <div className="py-8">
          <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-3xl p-8 mb-8 text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/isetan_wagashi_92x61.png"
                alt="和菓子"
                width={120}
                height={80}
                className="rounded-lg aspect-[92/61] object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              わがしのわ
            </h1>
            <p className="text-gray-600 mb-4">
              伝統の和菓子から最新の和菓子まで和菓子の世界に浸る
            </p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
              <span>メンバー数: 1,892人</span>
              <span>投稿数: 1,456件</span>
              <span>今日の投稿: 6件</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">最新の投稿</h2>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
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
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                    わがしのわ
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