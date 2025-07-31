import Image from "next/image";

export function Header() {
  return (
    <nav className="flex justify-between items-center px-2 py-3 bg-white/95 backdrop-blur-sm sticky top-0 z-50 relative">
      <Image
        src="https://www.mistore.jp/content/dam/isetan_mitsukoshi/ci/common/logo-mi.svg"
        alt="logo"
        width={100}
        height={50}
      />
      <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium">
        ログイン
      </button>
    </nav>
  );
} 