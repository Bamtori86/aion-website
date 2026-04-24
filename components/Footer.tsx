export default function Footer() {
    return (
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-8 mb-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600">개인정보처리방침</a>
            <a href="https://open.kakao.com/o/p6phjJri" target="_blank" className="hover:text-blue-600">문의하기(카카오톡)</a>
          </div>
          <div className="text-gray-400 text-xs space-y-2">
            <p>© AI-ON 교과연구회. All Rights Reserved.</p>
            <p>본 사이트는 연구회 회원의 최소 정보 외에 민감한 개인정보를 수집하지 않습니다.</p>
          </div>
        </div>
      </footer>
    );
  }