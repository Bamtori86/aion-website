import MaterialSlider from '@/components/MaterialSlider';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const categories = ['연구회 소개', '교육용자료', '학급운영자료', '업무용자료', '기타'];
  const { data: posts } = await supabase.from('materials').select('*').order('created_at', { ascending: false });

  return (
    <div className="bg-[#FDFCF8] min-h-screen pb-24 font-sans">
      {/* Hero Section: 2단 레이아웃 구현 */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* 왼쪽: 텍스트 및 버튼 섹션 */}
        <div className="flex-1 text-left space-y-8 animate-fade-in">
          <div>
            <span className="inline-block bg-[#FFF9E6] text-[#D97706] px-4 py-1.5 rounded-md text-sm font-bold mb-6">
              AI-ON 교과연구회
            </span>
            <h1 className="text-[52px] lg:text-[64px] font-black text-[#1F2937] leading-[1.1] tracking-tight">
              자료가 쌓일수록<br />
              <span className="text-[#D97706]">수업이 자라나요.</span>
            </h1>
          </div>
          
          <p className="text-[#6B7280] text-xl font-medium leading-relaxed max-w-lg">
            선생님은 손쉽게 수업 자료를 찾고 공유하며,<br />
            나만의 멋진 미래 교실을 함께 만들어가요.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-[#FFD600] text-[#1F2937] px-8 py-5 rounded-[2rem] font-black text-xl shadow-[0_8px_0_rgb(217,119,6)] hover:translate-y-1 hover:shadow-[0_4px_0_rgb(217,119,6)] transition-all flex items-center gap-3">
              연구회 시작하기 <span className="text-2xl">→</span>
            </button>
            <Link href="/login">
              <button className="bg-[#F3F4F6] text-[#4B5563] px-8 py-5 rounded-[2rem] font-black text-xl hover:bg-[#E5E7EB] transition-all">
    연구회 로그인
              </button>
            </Link>
          </div>
        </div>

        {/* 오른쪽: 이미지 카드 섹션 */}
        <div className="flex-1 w-full max-w-2xl relative">
          <div className="bg-[#FFF9E6] rounded-[3.5rem] p-12 aspect-[5/4] shadow-[0_20px_50px_rgba(255,214,0,0.1)] flex flex-col items-center justify-center relative border border-[#FFE8A3]">
            {/* 상단 배지 */}
            <div className="absolute top-8 left-8 bg-white px-5 py-2 rounded-full text-sm font-bold shadow-sm">
              Lv.1 · AI 교육의 시작
            </div>
            
            {/* 중앙 원형 캐릭터 영역 */}
            <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden border-4 border-[#FFF2C2] animate-bounce-slow">
               {/* 여기에 선생님이 넣은 title.png 가 들어갑니다 */}
               <Image 
                src="/title.png" 
                alt="캐릭터 이미지" 
                width={200} 
                height={200} 
                className="object-contain"
               />
            </div>

            {/* 하단 배지 */}
            <div className="absolute bottom-8 right-8 bg-white px-5 py-2 rounded-xl text-sm font-bold shadow-sm flex items-center gap-2">
              오늘의 추천 📑
            </div>
          </div>
        </div>
      </section>

      {/* 하단 자료 슬라이더 섹션 */}
      <main className="max-w-7xl mx-auto px-6 space-y-12">
        {categories.map((cat) => (
          <div key={cat} className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F3F4F6]">
            <MaterialSlider title={cat} posts={posts?.filter(p => p.category === cat) || []} />
          </div>
        ))}
      </main>
    </div>
  );
}