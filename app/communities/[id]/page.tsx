import { getCommunityById } from "@/src/data/communities";
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
      <div className={`srounded-3xl mb-8 text-center`}>
        <div className="flex justify-center mb-4">
          <Image
            src={community.imageUrl}
            alt={community.imageAlt}
            width={120}
            height={80}
            className="aspect-[92/61] object-cover w-full"
          />
        </div>
        <div className="flex items-start gap-4 bg-white rounded-2xl p-4 mx-2">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900 mb-2">
              {community.name}
            </h1>
            <p className="text-gray-600 mb-4 text-sm">
              {community.description}
            </p>
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

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">最新の投稿</h2>
        <button
          className={`${community.buttonColor} text-white px-6 py-2 rounded-full text-sm font-medium transition-colors`}
        >
          投稿する
        </button>
      </div>

      <div className="space-y-6">
        {community.posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-xs ${community.tagColor} px-3 py-1 rounded-full font-medium`}
              >
                {community.name}
              </span>
              <span className="text-xs text-gray-500">{post.createdAt}</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {post.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">{post.content}</p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                投稿者: {post.author}
              </span>

              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {post.comments}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
