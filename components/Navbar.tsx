// components/Navbar.tsx
import Link from 'next/link'; // 1. 이 줄이 맨 위에 있는지 확인!

export default function Navbar() {
  return (
    <nav className="...">
      <div className="...">
        {/* 로고 부분 생략 */}
        <div className="flex gap-2">
          {/* 2. 아래처럼 Link 태그로 버튼을 감싸주세요 */}
          <Link href="/login">
            <button className="px-5 py-2.5 rounded-full text-sm font-bold bg-brand text-gray-900 hover:shadow-lg transition-all">
              연구회 로그인
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}