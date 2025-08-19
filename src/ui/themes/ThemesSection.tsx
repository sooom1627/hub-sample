import { ThemeCard } from "./ThemeCard";

export function ThemesSection({communityId}: {communityId: string}) {
  // テーマデータ
  let themes = [
    {
      backgroundColor: "#F1FAFA",
      communityName: "Parfun",
      communityId: "perfume",
      title: "夏に纏いたい香水",
      hashColor: "text-blue-300/80",
      mainImages: [
        {
          src: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
          alt: "香水1",
        },
        {
          src: "https://images.unsplash.com/photo-1594736797933-d0a9ba7a2946?w=200&h=200&fit=crop&auto=format",
          alt: "香水2",
        },
      ],
      bottomImages: [
        {
          src: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=150&h=150&fit=crop&auto=format",
          alt: "コスメ1",
        },
        {
          src: "https://images.unsplash.com/photo-1556228578-626fdcd1c7e3?w=150&h=150&fit=crop&auto=format",
          alt: "コスメ2",
        },
        {
          src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&auto=format",
          alt: "コスメ3",
        },
      ],
      className: "",
    },
    {
      backgroundColor: "#FFF8F2",
      communityName: "外国展コミュニティ",
      communityId: "foreign-exhibitions",
      title: "英国展ベストバイ",
      hashColor: "text-orange-300/80",
      mainImages: [
        {
          src: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
          alt: "香水1",
        },
        {
          src: "https://images.unsplash.com/photo-1594736797933-d0a9ba7a2946?w=200&h=200&fit=crop&auto=format",
          alt: "香水2",
        },
      ],
      bottomImages: [
        {
          src: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=150&h=150&fit=crop&auto=format",
          alt: "コスメ1",
        },
        {
          src: "https://images.unsplash.com/photo-1556228578-626fdcd1c7e3?w=150&h=150&fit=crop&auto=format",
          alt: "コスメ2",
        },
        {
          src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&auto=format",
          alt: "コスメ3",
        },
      ],
      className: "mt-[-36px] md:mt-0",
    },
    {
      backgroundColor: "#FDF7E6",
      communityName: "わがしのわ",
      communityId: "wagashi",
      title: "暑い夏の日に食べたい和菓子",
      hashColor: "text-amber-300/80",
      mainImages: [
        {
          src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&auto=format",
          alt: "栗きんとん1",
        },
        {
          src: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=200&h=200&fit=crop&auto=format",
          alt: "栗きんとん2",
        },
      ],
      bottomImages: [
        {
          src: "https://images.unsplash.com/photo-1587362406391-97b33b6d8819?w=150&h=150&fit=crop&auto=format",
          alt: "和菓子1",
        },
        {
          src: "https://images.unsplash.com/photo-1548758919-b82203b9b473?w=150&h=150&fit=crop&auto=format",
          alt: "和菓子2",
        },
        {
          src: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=150&h=150&fit=crop&auto=format",
          alt: "和菓子3",
        },
      ],
      collectionText: {
        title: "AUTUMN",
        subtitle: "SELECTION",
      },
      className: "mt-[-36px] md:mt-0",
    },
    {
      backgroundColor: "#E4DAD3",
      communityName: "Le tour du chocolat",
      communityId: "chocolate",
      title: "絶品イートイン！",
      hashColor: "text-orange-900",
      mainImages: [
        {
          src: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
          alt: "チョコレート1",
        },
      ],
      bottomImages: [
        {
          src: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=150&h=150&fit=crop&auto=format",
          alt: "チョコレート2",
        },
      ],
      className: "",
    },
    {
      backgroundColor: "#E4DAD3",
      communityName: "Le tour du chocolat",
      communityId: "chocolate",
      title: "🌴夏のチョコスイーツ🍨",
      hashColor: "text-orange-900",
      mainImages: [
        {
          src: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
          alt: "チョコレート1",
        },
      ],
      bottomImages: [
        {
          src: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=150&h=150&fit=crop&auto=format",
          alt: "チョコレート2",
        },
      ],
      className: "mt-[-48px] md:mt-0",
    },
    {
      backgroundColor: "#FDF7E6",
      communityName: "わがしのわ",
      communityId: "wagashi",
      title: "氷の和菓子",
      hashColor: "text-amber-300/80",
      mainImages: [
        {
          src: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
          alt: "チョコレート1",
        },
      ],
      bottomImages: [
        {
          src: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=150&h=150&fit=crop&auto=format",
          alt: "チョコレート2",
        },
      ],
      className: "mt-[-36px] md:mt-0",
    },
    {
      backgroundColor: "#c8e6e8",
      communityName: "My APOTHECARY",
      communityId: "beauty",
      title: "私の愛用品",
      hashColor: "text-cyan-300/80",
      mainImages: [
        {
          src: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
          alt: "チョコレート1",
        },
      ],
      bottomImages: [
        {
          src: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=150&h=150&fit=crop&auto=format",
          alt: "チョコレート2",
        },
      ],
      className: "mt-[-36px] md:mt-0",
    },
    {
      backgroundColor: "#c8e6e6",
      communityName: "My APOTHECARY",
      communityId: "beauty",
      title: "暑さを乗り切るますとアイテム",
      hashColor: "text-cyan-300/80",
      mainImages: [
        {
          src: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
          alt: "チョコレート1",
        },
      ],
      bottomImages: [
        {
          src: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=150&h=150&fit=crop&auto=format",
          alt: "チョコレート2",
        },
      ],
      className: "mt-[-48px] md:mt-0",
    },
  ];

  if (communityId) {
    themes = themes.filter((theme) => theme.communityId === communityId);
  } else {
    themes = themes.slice(0, 3);
  }

  return (
    <section className="relative mt-8 pb-6 overflow-hidden">
      <div className="bg-white rounded-tl-[72px] pt-10 md:pb-10 md:px-8 md:rounded-xl">
        {/* ヘッダーセクション */}
        <div className="mb-8 flex flex-col items-center md:gap-2 px-6">
          <h2 className="text-2xl font-bold mb-1 text-gray-900">
            好きを追求しよう
          </h2>
          <p className="text-base text-gray-600">
            コミュニティで今盛り上がっている#投稿
          </p>
        </div>

        {/* テーマカードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {themes.map((theme, index) => (
            <ThemeCard
              key={index}
              backgroundColor={theme.backgroundColor}
              communityName={theme.communityName}
              communityId={theme.communityId}
              title={theme.title}
              hashColor={theme.hashColor}
              mainImages={theme.mainImages}
              bottomImages={theme.bottomImages}
              className={index === 0 ? "" : "mt-[-36px] md:mt-0"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
