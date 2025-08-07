import { CommunityCard } from "./CommunityCard";
import { CTASectionHeader } from "./CTASectionHeader";

const communities = [
  {
    id: 1,
    imageUrl: "/isetan_choco_92x61.png",
    imageAlt: "チョコレート",
    title: "Le tour du chocolat",
    description: "チョコレート好き大集合！愛しの推しについて語りましょう"
  },
  {
    id: 2,
    imageUrl: "/isetan_gaikokuten_92x61.png",
    imageAlt: "外国展",
    title: "外国展コミュニティ",
    description: "英国展・フランス展・イタリア展の催事を愛するコミュニティ"
  },
  {
    id: 3,
    imageUrl: "/isetan_wagashi_92x61.png",
    imageAlt: "和菓子",
    title: "わがしのわ",
    description: "伝統の和菓子から最新の和菓子まで和菓子の世界に浸る"
  },
  {
    id: 4,
    imageUrl: "/isetan_my_apothecary_92x61.png",
    imageAlt: "美容",
    title: "My APOTHECARY",
    description: "自分らしい美しさに出会う美と健康を愛する人々が集うコミュニティ"
  },
  {
    id: 5,
    imageUrl: "/isetan_parfun_92x61.png",
    imageAlt: "香水",
    title: "Parfun",
    description: "香水や香水文化に魅せられし人々のつどい香水コミュニティ"
  }
];

export function CTASection() {
  return (
    <section className="relative px-2 pb-6 overflow-hidden mx-auto mt-10 w-full max-w-[920px]">
          <CTASectionHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communities.map((community) => (
              <CommunityCard
                key={community.id}
                imageUrl={community.imageUrl}
                imageAlt={community.imageAlt}
                title={community.title}
                description={community.description}
              />
        ))}
      </div>
    </section>
  );
}
