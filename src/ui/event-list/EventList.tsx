import { EventCard } from "./EventCard";
import { EventListHeader } from "./EventListHeader";

let events = [
  {
    id: 1,
    imageUrl: "/event1.jpeg",
    imageAlt: "イベント1",
    communityId: "beauty",
    category: "my APOTHECARY",
    title: "NEW！【イベント】ナチュラグラッセ 秋冬限定コスメ！ツヤ肌リキッドファンデ体験会",
    url:"https://beautycommunity.mistore.jp/article/topic/2825/"
  },
  {
    id: 2,
    imageUrl: "/event2.png",
    imageAlt: "イベント2",
    communityId: "wagashi",
    category: "わがしのわ",
    title: "【イベント】秋をまちわびて♪おはぎdeお茶会🍵🌿",
    url:"https://wagashinowa.mistore.jp/article/topic/11152/"
  },
  {
    id: 3,
    imageUrl: "/event3.jpeg",
    imageAlt: "イベント3",
    communityId: "foreign-exhibitions",
    category: "外国展コミュニティ",
    title: "【イベント】日本橋三越本店 英国展ブランドご試食イベント ☕",
    url:"https://gaikokuten.mistore.jp/article/topic/3438/"
  },
  {
    id: 4,
    imageUrl: "/event4.jpeg",
    imageAlt: "イベント4",
    communityId: "beauty",
    category: "my APOTHECARY",
    title: "NEW！【イベント】 BALLON オラクルアロマリーディング",
    url:"https://beautycommunity.mistore.jp/article/topic/2836/"
  },
  {
    id: 5,
    imageUrl: "/event5.jpeg",
    imageAlt: "イベント5",
    communityId: "perfume",
    category: "Parfun",
    title: "【イベント】　＜athletia＞感情からインスピレーションを得て作られた新しいオードパルファンご紹介",
    url:"https://parfun.mistore.jp/article/topic/2460/"
  },
  {
    id: 6,
    imageUrl: "/event6.jpeg",
    imageAlt: "イベント6",
    communityId: "perfume",
    category: "Parfun",
    title: "【イベント】　セミナー＜MAISON DE L'ASIE/メゾン ド ラズィ＞～香りで巡るアジアの旅",
    url:"https://parfun.mistore.jp/article/topic/2450/"
  }
];

export function EventList({communityId}: {communityId: string}) {
  if (communityId) {
    events = events.filter((event) => event.communityId === communityId);
  }else{
    events = events.slice(0, 3);
  }

  return (
    <section className="relative overflow-hidden max-w-[920px] w-full mx-auto">
      <div className="relative backdrop-blur-sm rounded-2xl p-4 pt-6">
        <EventListHeader />
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              imageUrl={event.imageUrl}
              imageAlt={event.imageAlt}
              category={event.category}
              title={event.title}
              url={event.url}
            />
          ))}
        </div>
        ):(
          <div className="text-center text-gray-500 w-full bg-white rounded-lg p-4">
            <p>イベント絶賛企画中！<br />
            </p>
            <p className="text-blue-500 underline">他のコミュニティのイベントはこちら</p>
          </div>
        )}
        
      </div>
    </section>
  );
}
