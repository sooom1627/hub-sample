import { EventCard } from "./EventCard";
import { EventListHeader } from "./EventListHeader";

const events = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
    imageAlt: "イベント1",
    category: "わがしのわ",
    title: "【イベントのお知らせ】急須でチャレンジ！親子で煎茶マスター～一保堂茶舗×わがしのわ～"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
    imageAlt: "イベント2",
    category: "わがしのわ",
    title: "【イベントのお知らせ】急須でチャレンジ！親子で煎茶マスター～一保堂茶舗×わがしのわ～"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&auto=format",
    imageAlt: "イベント3",
    category: "わがしのわ",
    title: "【イベントのお知らせ】急須でチャレンジ！親子で煎茶マスター～一保堂茶舗×わがしのわ～"
  }
];

export function EventList() {
  return (
    <section className="relative overflow-hidden max-w-[920px] w-full mx-auto">
      <div className="relative backdrop-blur-sm rounded-2xl p-4 pt-6">
        <EventListHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              imageUrl={event.imageUrl}
              imageAlt={event.imageAlt}
              category={event.category}
              title={event.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
