'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { products, Product } from '@/data/products';
import ImageModal from '@/components/ImageModal';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  // Filter products by category
  const categoryProducts = products.filter(
    product => product.category === params.category
  );

  // Get category title
  const getCategoryTitle = () => {
    switch (params.category) {
      case 'women':
        return "Women's Collection";
      case 'men':
        return "Men's Collection";
      case 'accessories':
        return 'Accessories';
      default:
        return 'Products';
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedImage({ url: product.image, title: product.name });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedSize) {
      // Here you would implement the actual cart functionality
      console.log(`Added to cart: ${selectedProduct.name}, Size: ${selectedSize}, Quantity: ${quantity}`);
      alert(`Added to cart: ${selectedProduct.name}, Size: ${selectedSize}, Quantity: ${quantity}`);
      handleCloseModal();
    } else {
      alert('Please select a size');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/categories" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Categories
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{getCategoryTitle()}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="relative h-64 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-xl font-bold text-gray-900 mb-4">${product.price.toFixed(2)}</p>
                <button 
                  className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors w-full"
                  onClick={() => handleProductClick(product)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-96">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                
                <div>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <p className="text-xl font-bold text-gray-900 mb-4">${selectedProduct.price.toFixed(2)}</p>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Color: {selectedProduct.color}
                    </label>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Brand: {selectedProduct.brand}
                    </label>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          className={`px-3 py-1 border rounded-md ${
                            selectedSize === size
                              ? 'bg-gray-900 text-white border-gray-900'
                              : 'border-gray-300 text-gray-700 hover:border-gray-900'
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center">
                      <button
                        className="px-3 py-1 border border-gray-300 rounded-l-md"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 px-3 py-1 border-t border-b border-gray-300 text-center"
                      />
                      <button
                        className="px-3 py-1 border border-gray-300 rounded-r-md"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <button
                    className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors w-full"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 