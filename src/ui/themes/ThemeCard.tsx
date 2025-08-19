import Link from "next/link";
import { ThemeImageGrid } from "./ThemeImageGrid";

interface ThemeCardProps {
  backgroundColor: string;
  communityName: string;
  title: string;
  communityId: string;
  hashColor: string;
  mainImages: {
    src: string;
    alt: string;
  }[];
  bottomImages: {
    src: string;
    alt: string;
  }[];
  collectionText?: {
    title: string;
    subtitle: string;
  };
  className?: string;
}

export function ThemeCard({
  backgroundColor,
  communityName,
  title,
  hashColor,
  mainImages,
  bottomImages,
  collectionText,
  communityId,
  className = ""
}: ThemeCardProps) {
  return (
    <div
      className={`px-4 py-8 overflow-hidden rounded-tl-[54px] pt-10 pb-12 md:rounded-xl ${className}`}
      style={{
        backgroundColor,
      }}
    >
      <div className="relative p-2">
        {/* ヘッダー */}
        <div className="flex flex-col items-center justify-between mb-8 gap-1">
          <Link href={`/communities/${communityId}`} className="text-gray-700 px-3 py-1.5 rounded-lg text-base font-medium z-10 underline">
            {communityName}
          </Link>
          <h3 className="text-xl font-semibold text-gray-800 ml-2 z-10">
            {title}
          </h3>
          <p className={`absolute left-10 text-[64px] font-bold ${hashColor}`}>
            #
          </p>
        </div>

        {/* 画像グリッド */}
        <ThemeImageGrid
          mainImages={mainImages}
          bottomImages={bottomImages}
          collectionText={collectionText}
        />

        {/* アクションボタン */}
        <div className="flex items-center justify-center">
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">
            もっと見る
          </button>
        </div>
      </div>
    </div>
  );
}