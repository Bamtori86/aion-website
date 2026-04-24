'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert('로그인 실패: ' + error.message);
    else {
      alert('반갑습니다! 관리자 페이지로 이동합니다.');
      router.push('/write'); // 로그인 성공 시 글쓰기 페이지로 이동
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FDFCF8] px-4">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-xl p-12 border border-gray-100">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6 text-2xl font-black text-blue-600">AI-ON</Link>
          <h2 className="text-3xl font-black text-gray-900">연구회 로그인</h2>
          <p className="text-gray-400 mt-2 font-medium">관리자 전용 로그인 페이지입니다.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 px-1">이메일 주소</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              placeholder="example@mail.com"
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 px-1">비밀번호</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
              placeholder="••••••••"
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
            />
          </div>
          <button type="submit" className="w-full bg-[#FFD600] text-gray-900 py-5 rounded-2xl font-black text-lg shadow-[0_6px_0_rgb(217,119,6)] hover:translate-y-1 hover:shadow-[0_3px_0_rgb(217,119,6)] transition-all">
            로그인하기
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm font-bold text-gray-400 hover:text-blue-600">메인으로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
}