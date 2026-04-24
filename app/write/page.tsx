'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('교육용자료');
  const [description, setDescription] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const router = useRouter();

  // 로그인 체크: 로그인 안 되어 있으면 홈으로 튕겨냄
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        alert('권한이 없습니다. 로그인해주세요.');
        router.push('/login');
      }
    };
    checkUser();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('materials').insert([{ 
      title, category, description, link_url: linkUrl 
    }]);

    if (error) alert('등록 실패: ' + error.message);
    else {
      alert('자료가 성공적으로 등록되었습니다!');
      router.push('/'); // 등록 후 메인으로 이동
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-black mb-10">새 자료 등록하기</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block font-bold mb-2">섹터 선택</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500">
            {['연구회 소개', '교육용자료', '학급운영자료', '업무용자료', '기타'].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-bold mb-2">자료 제목</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required
            placeholder="정사각형 카드에 보일 제목"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block font-bold mb-2">간단 설명</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required
            placeholder="자료에 대한 짧은 설명을 적어주세요."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 h-32 outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block font-bold mb-2">자료 링크 (URL)</label>
          <input type="url" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} required
            placeholder="구글 드라이브, 노션 등 공유 링크 주소"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all">
          자료 게시하기
        </button>
      </form>
    </div>
  );
}