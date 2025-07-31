import Image from "next/image";

export function Header() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <Image
        src="https://www.mistore.jp/content/dam/isetan_mitsukoshi/ci/common/logo-mi.svg"
        alt="logo"
        width={180}
        height={80}
      />
      <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold">
        登録する
      </button>
    </nav>
  );
} 