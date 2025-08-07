import Image from "next/image";
import { useEffect, useState } from "react";

// カテゴリのデータ型定義
type Category = {
  id: string;
  name: string;
  icon: string;
  content: {
    title: string;
    subtitle: string;
    headerImage: string;
    participants: number;
    posts: number;
    circleImage: string;
  };
};

// カテゴリデータ
const categories: Category[] = [
  {
    id: "chocolate",
    name: "Le Tour Du Chocolat",
    icon: "🍫",
    content: {
      title: "LE TOUR DU CHOCOLAT",
      subtitle: "チョコレートが好きなあなたに",
      headerImage:
        "/isetan_choco_92x61.png",
      participants: 1500,
      posts: 8000,
      circleImage: "/chocolate-community.jpg",
    },
  },
  {
    id: "wagashi",
    name: "わがしのわ",
    icon: "🍡",
    content: {
      title: "わがしのわ",
      subtitle: "和菓子を愛する人たちのコミュニティ",
      headerImage:
        "/isetan_wagashi_92x61.png",
      participants: 800,
      posts: 3200,
      circleImage: "/wagashi-community.jpg",
    },
  },
  {
    id: "parfum",
    name: "Parfum",
    icon: "🌸",
    content: {
      title: "Parfum",
      subtitle: "香りの世界を探求しよう",
      headerImage:
        "/isetan_parfun_92x61.png",
      participants: 1200,
      posts: 5400,
      circleImage: "/parfum-community.jpg",
    },
  },
  {
    id: "apothecary",
    name: "My apothecary",
    icon: "🧴",
    content: {
      title: "My apothecary",
      subtitle: "ナチュラルケアの探求",
      headerImage:
        "/isetan_my_apothecary_92x61.png",
      participants: 950,
      posts: 4100,
      circleImage: "/apothecary-community.jpg",
    },
  },
  {
    id: "gaikoku",
    name: "外国酒",
    icon: "🍷",
    content: {
      title: "外国酒",
      subtitle: "世界の酒文化を楽しもう",
      headerImage:
        "/isetan_gaikokuten_92x61.png",
      participants: 600,
      posts: 2800,
      circleImage: "/alcohol-community.jpg",
    },
  },
];

// CommunityShowcaseコンポーネント
export function CommunityShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("chocolate");

  const currentCategory = categories.find((cat) => cat.id === selectedCategory);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedCategory((current) => {
        const currentIndex = categories.findIndex((cat) => cat.id === current);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex].id;
      });
    }, 5000); // 5秒ごとに変更

    return () => clearInterval(timer); // クリーンアップ
  }, []);

  return (
    <div className="flex flex-col md:items-center md:flex-row overflow-hidden rounded-xl w-full mx-auto md:gap-4">
      {/* メインコンテンツエリア */}
      <div className="relative w-full md:w-2/3 mb-16">
        <p className="text-base text-left mb-4 font-bold">
          {currentCategory?.content.subtitle}
        </p>
        {/* メイン画像 */}
        <div className="relative w-full h-60 md:h-92 overflow-hidden">
          <Image
            src={currentCategory?.content.headerImage || ""}
            alt={currentCategory?.content.title || ""}
            fill
            className="object-cover rounded-xl aspect-[16/9]"
          />
        </div>

        {/* 統計情報エリア */}
        <div className="absolute bottom-[-40px] left-0 right-0 bg-white p-4 shadow-lg rounded-xl mx-2 md:mx-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-sm md:text-base text-gray-800">参加者</div>
                <div className="text-sm md:text-base font-bold text-zinc-800">
                  {currentCategory?.content.participants.toLocaleString()}{" "}
                  <span className="text-xs font-normal text-gray-800">名</span>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-sm md:text-base text-gray-800">投稿数</div>
                <div className="text-sm md:text-base font-bold text-zinc-800">
                  {currentCategory?.content.posts.toLocaleString()}{" "}
                  <span className="text-xs font-normal text-gray-800">
                    投稿
                  </span>
                </div>
              </div>
            </div>
            <button className="border-2 border-emerald-600 text-emerald-600 px-6 py-2 rounded-full hover:bg-emerald-700 hover:text-white transition-colors font-medium text-sm">
              詳細をみる
            </button>
          </div>
        </div>
      </div>

      {/* カテゴリ選択エリア */}
      <div className="w-full md:w-1/3 px-4 ">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center gap-2">
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col justify-center items-center p-3 transition-all duration-200 rounded-full w-20 h-20 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-br from-emerald-100/80 to-emerald-200/60 backdrop-blur-sm scale-105"
                    : "bg-white/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-gray-100/80 hover:to-gray-50/60 hover:scale-105"
                }`}
              >
                <div className="text-4xl mb-1">{category.icon}</div>
              </button>
              <div className="text-xs text-center font-medium leading-tight">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
