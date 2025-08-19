export interface CommunityPost {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  comments: number;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  logoUrl: string;
  bgGradient: string;
  buttonColor: string;
  tagColor: string;
  memberCount: number;
  postCount: number;
  todayPostCount: number;
  posts: CommunityPost[];
}

export const communities: Community[] = [
  {
    id: "chocolate",
    name: "Le tour du chocolat",
    description: "チョコレート好きな人々が集まるコミュニティ。話して、食べて、つながって、仲間とともに奥深きチョコレートの旅へ。",
    imageUrl: "/isetan_choco_92x61.png",
    logoUrl: "/isetan_choco_logo.png",
    imageAlt: "チョコレート",
    bgGradient: "from-amber-100 to-orange-100",
    buttonColor: "bg-amber-600 hover:bg-amber-700",
    tagColor: "bg-amber-100 text-amber-700",
    memberCount: 2456,
    postCount: 1234,
    todayPostCount: 8,
    posts: [
      {
        id: 1,
        title: "ベルギーチョコレートの老舗ブランドについて",
        content: "ゴディバ、レオニダス、ピエール・マルコリーニなど、ベルギーの名門チョコレートブランドについて語りましょう！",
        author: "ベルギーチョコ通",
        createdAt: "2024-08-07",
        likes: 32,
        comments: 14
      },
      {
        id: 2,
        title: "手作りトリュフのレシピ教えてください",
        content: "自宅でできるトリュフの作り方を教えてください。特にガナッシュの作り方のコツが知りたいです。",
        author: "チョコ初心者",
        createdAt: "2024-08-06",
        likes: 28,
        comments: 19
      },
      {
        id: 3,
        title: "バレンタインの新作チョコレート情報",
        content: "来年のバレンタインに向けて、各ブランドの新作情報を共有しませんか？",
        author: "バレンタイン準備中",
        createdAt: "2024-08-05",
        likes: 45,
        comments: 23
      }
    ]
  },
  {
    id: "foreign-exhibitions",
    name: "外国展コミュニティ",
    description: "英国展・フランス展・イタリア展の催事を愛するコミュニティ",
    imageUrl: "/isetan_gaikokuten_92x61.png",
    logoUrl: "/isetan_gaikokuten_logo.png",
    imageAlt: "外国展",
    bgGradient: "from-blue-100 to-purple-100",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    tagColor: "bg-blue-100 text-blue-700",
    memberCount: 3124,
    postCount: 2567,
    todayPostCount: 12,
    posts: [
      {
        id: 1,
        title: "イタリア展2024の見どころまとめ",
        content: "今年のイタリア展で絶対に見逃せないブランドやグルメ情報をまとめました！パスタソースとオリーブオイルは特におすすめです。",
        author: "イタリア通",
        createdAt: "2024-08-07",
        likes: 41,
        comments: 18
      },
      {
        id: 2,
        title: "フランス展の戦利品シェア大会",
        content: "みなさんのフランス展での購入品を見せ合いましょう！私はマカロンとフォアグラを買いました♪",
        author: "フランス愛好家",
        createdAt: "2024-08-06",
        likes: 35,
        comments: 22
      },
      {
        id: 3,
        title: "イギリス展の紅茶とスコーンが絶品でした",
        content: "昨日行ったイギリス展で購入した紅茶とスコーンが本格的で感動しました。おすすめの組み合わせも教えてください！",
        author: "アフタヌーンティー好き",
        createdAt: "2024-08-05",
        likes: 29,
        comments: 16
      }
    ]
  },
  {
    id: "wagashi",
    name: "わがしのわ",
    description: "伝統の和菓子から最新の和菓子まで和菓子の世界に浸る",
    imageUrl: "/isetan_wagashi_92x61.png",
    logoUrl: "/isetan_wagashi_logo.png",
    imageAlt: "和菓子",
    bgGradient: "from-green-100 to-teal-100",
    buttonColor: "bg-green-600 hover:bg-green-700",
    tagColor: "bg-green-100 text-green-700",
    memberCount: 1892,
    postCount: 1456,
    todayPostCount: 6,
    posts: [
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
    ]
  },
  {
    id: "beauty",
    name: "My APOTHECARY",
    description: "自分らしい美しさに出会う美と健康を愛する人々が集うコミュニティ",
    imageUrl: "/isetan_my_apothecary_92x61.png",
    logoUrl: "/isetan_beauty_logo.png",
    imageAlt: "美容",
    bgGradient: "from-pink-100 to-rose-100",
    buttonColor: "bg-pink-600 hover:bg-pink-700",
    tagColor: "bg-pink-100 text-pink-700",
    memberCount: 4567,
    postCount: 3890,
    todayPostCount: 15,
    posts: [
      {
        id: 1,
        title: "夏のスキンケアルーティン大公開",
        content: "湿度が高い夏の時期のスキンケア方法をシェアします！毛穴ケアと保湿のバランスが重要ですよね。みなさんのルーティンも教えてください♪",
        author: "スキンケアマニア",
        createdAt: "2024-08-07",
        likes: 56,
        comments: 31
      },
      {
        id: 2,
        title: "新作ファンデーションのレビュー",
        content: "話題の新作リキッドファンデーションを試してみました。カバー力と自然さのバランスが絶妙です！色選びのポイントもお話しします。",
        author: "メイクアップアーティスト",
        createdAt: "2024-08-06",
        likes: 48,
        comments: 24
      },
      {
        id: 3,
        title: "アンチエイジングケアについて相談",
        content: "30代に入ってからのエイジングケアについて悩んでいます。みなさんのおすすめのアイテムや方法があれば教えてください。",
        author: "美容初心者",
        createdAt: "2024-08-05",
        likes: 39,
        comments: 27
      }
    ]
  },
  {
    id: "perfume",
    name: "Parfun",
    description: "香水や香水文化に魅せられし人々のつどい香水コミュニティ",
    imageUrl: "/isetan_parfun_92x61.png",
    logoUrl: "/isetan-parfon_logo.png",
    imageAlt: "香水",
    bgGradient: "from-purple-100 to-indigo-100",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    tagColor: "bg-purple-100 text-purple-700",
    memberCount: 2789,
    postCount: 1987,
    todayPostCount: 9,
    posts: [
      {
        id: 1,
        title: "秋の新作フレグランス情報まとめ",
        content: "秋に向けて各ブランドから発表された新作フレグランスをまとめました。ウッディ系やスパイシー系の香りが豊富で楽しみです♪",
        author: "フレグランス・コレクター",
        createdAt: "2024-08-07",
        likes: 43,
        comments: 16
      },
      {
        id: 2,
        title: "香水の正しい付け方について質問",
        content: "香水初心者です。どこに、どのタイミングで付けるのが正しいのでしょうか？長持ちさせるコツも知りたいです。",
        author: "香水デビュー",
        createdAt: "2024-08-06",
        likes: 35,
        comments: 21
      },
      {
        id: 3,
        title: "シャネルのクラシック香水の魅力",
        content: "シャネル No.5を久しぶりに付けて、改めてその魅力を感じました。時代を超えて愛され続ける理由について語りませんか？",
        author: "クラシック愛好家",
        createdAt: "2024-08-05",
        likes: 38,
        comments: 14
      }
    ]
  }
];

export function getCommunityById(id: string): Community | undefined {
  return communities.find(community => community.id === id);
}