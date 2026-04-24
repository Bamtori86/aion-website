'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';

export default function MaterialSlider({ title, posts }: { title: string, posts: any[] }) {
  const safeTitle = title.replace(/\s+/g, '-');
  
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <div className="flex gap-2">
          <button className={`prev-${safeTitle} w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-brand transition-colors`}>
            <ChevronLeft size={20} />
          </button>
          <button className={`next-${safeTitle} w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-brand transition-colors`}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation={{ prevEl: `.prev-${safeTitle}`, nextEl: `.next-${safeTitle}` }}
        breakpoints={{ 640: { slidesPerView: 2.5 }, 1024: { slidesPerView: 3.5 } }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <a href={post.link_url} target="_blank" className="group block h-full">
              <div className="bg-sub border border-gray-100 rounded-[2rem] p-8 h-full flex flex-col justify-between hover:border-brand hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:rotate-12 transition-transform">
                    📖
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">{post.description}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200/50 flex justify-between items-center text-xs font-bold text-gray-400">
                  <span>자료 확인하기</span>
                  <span className="text-brand text-lg">→</span>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}