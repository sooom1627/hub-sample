import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "おすすめのチョコレート専門店を教えて！",
    content: "最近チョコレートにハマっています。都内でおすすめの専門店があれば教えてください！",
    author: "チョコ愛好家",
    community: "Le tour du chocolat",
    image: "/isetan_choco_92x61.png",
    createdAt: "2024-08-07",
    likes: 24,
    comments: 8
  },
  {
    id: 2,
    title: "フランス展の戦利品を公開します！",
    content: "先日のフランス展で購入したものをシェアします。マカロンとジャムが絶品でした♪",
    author: "パリジェンヌ",
    community: "外国展コミュニティ",
    image: "/isetan_gaikokuten_92x61.png",
    createdAt: "2024-08-06",
    likes: 18,
    comments: 12
  },
  {
    id: 3,
    title: "季節の和菓子について語りませんか？",
    content: "夏の和菓子といえば何を思い浮かべますか？水羊羹、葛切り、みなさんのお気に入りを教えてください。",
    author: "和菓子マスター",
    community: "わがしのわ",
    image: "/isetan_wagashi_92x61.png",
    createdAt: "2024-08-05",
    likes: 31,
    comments: 15
  },
  {
    id: 4,
    title: "新作スキンケアアイテムのレビュー",
    content: "話題の新作美容液を試してみました。使用感や効果について詳しくレビューします！",
    author: "ビューティー研究家",
    community: "My APOTHECARY",
    image: "/isetan_my_apothecary_92x61.png",
    createdAt: "2024-08-04",
    likes: 27,
    comments: 9
  },
  {
    id: 5,
    title: "春にぴったりな香水の選び方",
    content: "暖かくなってきたので香水を変えたいと思います。春におすすめのフレグランスを教えてください。",
    author: "香りソムリエ",
    community: "Parfun",
    image: "/isetan_parfun_92x61.png",
    createdAt: "2024-08-03",
    likes: 22,
    comments: 6
  }
];

export default function PostsPage() {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        投稿一覧
      </h1>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <article 
            key={post.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.community}
                  width={80}
                  height={53}
                  className="rounded-lg object-cover aspect-[92/61]"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium">
                    {post.community}
                  </span>
                  <span className="text-xs text-gray-500">
                    {post.createdAt}
                  </span>
                </div>
                
                <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}