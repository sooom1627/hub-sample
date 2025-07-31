import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative mx-2 mb-4 rounded-2xl p-4 overflow-hidden">
      {/* フッター背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-50/80 to-slate-50/70"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-10 h-10 bg-gray-300/60 rounded-full blur-lg"></div>
        <div className="absolute bottom-3 left-6 w-6 h-6 bg-slate-300/60 rounded-full blur-md"></div>
      </div>
      {/* グリッドパターン */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative">
        <div className="mb-6">
          <Image
            src="https://www.mistore.jp/content/dam/isetan_mitsukoshi/ci/common/logo-mi.svg"
            alt="logo"
            width={100}
            height={50}
            className="mb-3"
          />
          <p className="text-base text-gray-600 leading-relaxed">
            好きが見つかる、ひろがる。<br />
            あなたの趣味の世界をもっと豊かに。
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-3 text-gray-900 text-base">サービス</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="block py-1">コミュニティ</a></li>
              <li><a href="#" className="block py-1">テーマ</a></li>
              <li><a href="#" className="block py-1">イベント</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 text-gray-900 text-base">サポート</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="block py-1">ヘルプ</a></li>
              <li><a href="#" className="block py-1">お問い合わせ</a></li>
              <li><a href="#" className="block py-1">プライバシー</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-4 text-center">
          <p className="text-sm text-gray-500">&copy; 2024 三越伊勢丹. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 