'use client';

import ImageUpload from '@/components/ImageUpload';

export default function Home() {
  const handleImageUpload = (file: File) => {
    // 여기에 이미지 업로드 처리 로직을 추가할 수 있습니다
    console.log('Uploaded file:', file);
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          패션 AI 서비스
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            옷 이미지 업로드
          </h2>
          <ImageUpload onImageUpload={handleImageUpload} />
        </div>
      </div>
    </main>
  );
}
