import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center font-black text-white text-xl">A</div>
          <span className="font-bold text-xl tracking-tight text-gray-900">AI-ON</span>
        </Link>
        <div className="flex gap-2">
          <Link href="/login" className="px-5 py-2.5 rounded-full text-sm font-bold bg-brand text-gray-900 hover:shadow-lg transition-all">
            연구회 로그인
          </Link>
        </div>
      </div>
    </nav>
  );
}