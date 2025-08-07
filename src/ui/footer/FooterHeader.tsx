import Image from "next/image";

export function FooterHeader() {
  return (
    <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={40}
          className="h-10 w-auto"
        />
      </div>
      <div className="text-center md:text-right">
        <p className="text-lg font-medium text-gray-800 leading-relaxed">
          好きが見つかる、ひろがる。
        </p>
        <p className="text-sm text-gray-600 mt-1">
          あなたの趣味の世界をもっと豊かに。
        </p>
      </div>
    </div>
  );
}