'use client';

import Image from 'next/image';
import Link from 'next/link';
import ImageUpload from '@/components/ImageUpload';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const handleImageUpload = (file: File) => {
    // 여기에 이미지 업로드 처리 로직을 추가할 수 있습니다
    console.log('Uploaded file:', file);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070"
            alt="Fashion Hero"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Discover Your Style with AI
            </h1>
            <p className="text-xl mb-8">
              Upload your photo and let our AI help you find the perfect outfit
            </p>
            <Link href="/categories">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Upload Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI Style Assistant
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Upload a photo of your outfit or a style you like, and our AI will help you find similar items and suggest perfect matches.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ImageUpload onImageUpload={handleImageUpload} />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Women',
                image: 'https://images.unsplash.com/photo-1525845859779-54d477ff291f?q=80&w=2070'
              },
              {
                name: 'Men',
                image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974'
              },
              {
                name: 'Accessories',
                image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1974'
              }
            ].map((category) => (
              <Link href={`/categories?category=${category.name.toLowerCase()}`} key={category.name}>
                <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <div className="flex items-center justify-center">
                        <span className="mr-2">Shop Now</span>
                        <ArrowRightIcon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Fashion AI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
