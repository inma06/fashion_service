'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { api } from '@/services/api';
import { Product } from '@/types/product';

export default function SalePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSaleItems = async () => {
      try {
        const data = await api.products.getSaleItems();
        setProducts(data);
      } catch (err) {
        setError('Failed to load sale items');
        console.error('Error fetching sale items:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSaleItems();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          Sale Items
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            const discountedPrice = product.price * (1 - product.discount);
            return (
              <div key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded">
                    {Math.round(product.discount * 100)}% OFF
                  </div>
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <p className="text-lg font-medium text-gray-900">
                    ${discountedPrice.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 