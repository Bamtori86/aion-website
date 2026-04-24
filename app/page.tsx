import MaterialSlider from '@/components/MaterialSlider';
import { supabase } from '@/lib/supabase';
import Image from 'next/image'; // 이미지를 쓰기 위해 불러옵니다.

export default async function Home() {
  const categories = ['연구회 소개', '교육용자료', '학급운영자료', '업무용자료', '기타'];
  const { data: posts } = await supabase.from('materials').select('*').order('created_at', { ascending: false });

  return (
    <div className="bg-sub min-h-screen pb-20">
{/* Hero Section */}
<section className="pt-20 pb-16 px-6 text-center flex flex-col items-center">
  {/* 상단 배지 */}
  <div className="inline-block px-4 py-1.5 bg-white rounded-full text-[#FFD600] font-bold text-sm shadow-sm mb-8 border border-gray-100">
    우리 반 인공지능 파트너
  </div>

  {/* 이미지 컨테이너: 너비와 높이를 대폭 키웠습니다 */}
  <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] mb-10 transition-all">
    <Image 
      src="/title.png" // 파일명이 title.png 인지 다시 확인하세요!
      alt="AI-ON 메인 이미지"
      fill
      className="object-contain" // 이미지가 잘리지 않고 최대 크기로 보이게 함
      priority
    />
  </div>

  {/* 서브 문구: 이미지와 조금 더 간격을 둠 */}
  <p className="text-gray-400 font-medium text-xl leading-relaxed max-w-2xl mx-auto">
    복잡한 설정 없이, 오늘부터 바로 수업에 활용하세요.
  </p>
</section>
      {/* Main Content: 슬라이더 섹션 */}
      <main className="max-w-6xl mx-auto px-4 space-y-8 mt-10">
        {categories.map((cat) => (
          <div key={cat} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100">
            <MaterialSlider title={cat} posts={posts?.filter(p => p.category === cat) || []} />
          </div>
        ))}
      </main>
    </div>
  );
}