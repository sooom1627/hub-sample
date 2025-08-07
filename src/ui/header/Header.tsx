import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="flex items-center justify-between gap-4 max-w-[920px] mx-auto w-full py-2">
      <Link href="/">
      <Image
        src="/logo.svg"
        alt="logo"
        width={180}
        height={80}
      />
      </Link>
      <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold">
        登録する
      </button>
      </div>
    </nav>
  );
} 