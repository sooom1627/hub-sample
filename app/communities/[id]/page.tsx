import { getCommunityById } from "@/src/data/communities";
import { EventList } from "@/src/ui/event-list/EventList";
import { ThemesSection } from "@/src/ui/themes/ThemesSection";
import { AnimatedSection } from "@/src/components/AnimatedSection";
import Image from "next/image";
import { notFound } from "next/navigation";

interface CommunityPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { id } = await params;
  const community = getCommunityById(id);

  if (!community) {
    notFound();
  }

  return (
    <div className="">
      {/* コミュニティ情報 */}
      <div className={`srounded-3xl mb-8 text-center`}>
        <AnimatedSection>
          <div className="flex flex-col justify-center mb-4 md:flex-row md:my-4">
            <Image
              src={community.imageUrl}
              alt={community.imageAlt}
              width={300}
              height={200}
              className="object-cover aspect-[92/61] w-full md:w-1/2 md:rounded-2xl"
            />
            <div className="flex items-start gap-4 bg-white rounded-2xl p-4 mx-4 mt-[-60px] md:mt-0">
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-row gap-4 items-center justify-center">
                  <Image
                    src={community.logoUrl}
                    alt="isetan_choco_logo"
                    width={100}
                    height={100}
                    className="rounded-2xl w-20 h-20"
                  />
                  <p className="text-gray-600 text-sm text-left">
                    {community.description}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-8 text-sm text-gray-600 mb-4">
                  <div className="text-center">
                    <div className="text-gray-500">参加者</div>
                    <div className="font-semibold">
                      {community.memberCount.toLocaleString()}名
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500">投稿数</div>
                    <div className="font-semibold">
                      {community.postCount.toLocaleString()}投稿
                    </div>
                  </div>
                  <button className="bg-blue-950 text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-blue-900 transition-colors">
                    参加する {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      <div className="">
        {/* 最新情報セクション */}
        <div className="mb-4">
          <AnimatedSection delay={100}>
            <div className="flex items-center gap-2 mb-4 px-4 mt-8">
              <span className="text-xl">📢</span>
              <h2 className="text-lg font-bold text-red-500">
                最新情報をPICK UP
              </h2>
            </div>

            {/* イベントカード横スクロール */}
            <div
              className="flex gap-4 overflow-x-auto scrollbar-hide px-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* イベントカード1 */}
              <div className="rounded-2xl overflow-hidden flex-shrink-0 w-3/5 md:w-3/12">
                <div className="relative">
                  <Image
                    src="/pickup1.webp"
                    alt="和菓子総選挙イベント"
                    width={300}
                    height={200}
                    className="object-cover aspect-[92/61] w-full rounded-2xl"
                  />
                </div>
                <div className="px-1 py-2">
                  <h3 className="text-sm text-gray-900 mb-2 font-bold text-left line-clamp-3">
                  【コミュニティ】新コミュニティ『外国展コミュニティ』オープン！🌈
                  </h3>
                </div>
              </div>

              {/* イベントカード2 */}
              <div className="rounded-2xl overflow-hidden flex-shrink-0 w-3/5 md:w-3/12">
                <div className="relative">
                  <Image
                    src="/pickup2.webp"
                    alt="和菓子総選挙イベント"
                    width={300}
                    height={200}
                    className="object-cover aspect-[92/61] w-full rounded-2xl"
                  />
                </div>
                <div className="px-1 py-2">
                  <h3 className="text-sm text-gray-900 mb-2 font-bold text-left line-clamp-3">
                  メンバー厳選の絶品イートイン🥰🍫をまとめてチェック！😘週末にぜひ！
                  </h3>
                </div>
              </div>

              {/* イベントカード3 */}
              <div className="rounded-2xl overflow-hidden flex-shrink-0 w-3/5 md:w-3/12">
                <div className="relative">
                  <Image
                    src="/pickup3.webp"
                    alt="和菓子総選挙イベント"
                    width={300}
                    height={200}
                    className="object-cover aspect-[92/61] w-full rounded-2xl"
                  />
                </div>
                <div className="px-1 py-2">
                  <h3 className="text-sm text-gray-900 mb-2 font-bold text-left line-clamp-3">
                  【1人1票】和菓子 総選挙推し和菓子に投票しよう！〜〜〜〜
                  </h3>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 投稿テーマ */}
          <AnimatedSection delay={200}>
            <ThemesSection communityId={id} />
          </AnimatedSection>

          {/* イベント */}
          <AnimatedSection delay={300}>
            <EventList communityId={id} />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
