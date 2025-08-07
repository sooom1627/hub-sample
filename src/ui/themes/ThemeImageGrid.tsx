import Image from "next/image";

interface ThemeImageGridProps {
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
}

export function ThemeImageGrid({ 
  mainImages, 
  bottomImages, 
  collectionText = { title: "SUMMER", subtitle: "COLLECTION" }
}: ThemeImageGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2 mb-4">
      {/* メイン画像（上部2枚） */}
      {mainImages.map((image, index) => (
        <div key={index} className="aspect-square rounded-xl overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* コレクションテキスト */}
      <div className="aspect-square rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-700">
            {collectionText.title}
          </div>
          <div className="text-xs text-gray-500 font-medium">
            {collectionText.subtitle}
          </div>
        </div>
      </div>

      {/* 追加画像（右上） */}
      <div className="aspect-square rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop&auto=format"
          alt="コスメ4"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 下部画像グリッド（3枚） */}
      <div className="col-span-2 grid grid-cols-3 gap-2">
        {bottomImages.map((image, index) => (
          <div key={index} className="aspect-square rounded-xl overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={150}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}