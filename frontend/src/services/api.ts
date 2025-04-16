import { Product } from '@/types/product';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const api = {
  // 상품 관련 API
  products: {
    getAll: async (): Promise<Product[]> => {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) throw new Error('Failed to fetch products');
      return response.json();
    },
    getByCategory: async (category: string): Promise<Product[]> => {
      const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
      if (!response.ok) throw new Error('Failed to fetch products by category');
      return response.json();
    },
    getNewArrivals: async (): Promise<Product[]> => {
      const response = await fetch(`${API_BASE_URL}/products/new`);
      if (!response.ok) throw new Error('Failed to fetch new arrivals');
      return response.json();
    },
    getSaleItems: async (): Promise<Product[]> => {
      const response = await fetch(`${API_BASE_URL}/products/sale`);
      if (!response.ok) throw new Error('Failed to fetch sale items');
      return response.json();
    },
  },

  // 카테고리 관련 API
  categories: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      return response.json();
    },
  },

  // 장바구니 관련 API
  cart: {
    get: async () => {
      const response = await fetch(`${API_BASE_URL}/cart`, {
        credentials: 'include',
      });
      if (!response.ok) throw new Error('Failed to fetch cart');
      return response.json();
    },
    addItem: async (productId: string, quantity: number, size: string) => {
      const response = await fetch(`${API_BASE_URL}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ productId, quantity, size }),
      });
      if (!response.ok) throw new Error('Failed to add item to cart');
      return response.json();
    },
    updateQuantity: async (itemId: string, quantity: number) => {
      const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ quantity }),
      });
      if (!response.ok) throw new Error('Failed to update cart item');
      return response.json();
    },
    removeItem: async (itemId: string) => {
      const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!response.ok) throw new Error('Failed to remove item from cart');
      return response.json();
    },
  },

  // 사용자 관련 API
  auth: {
    login: async (email: string, password: string) => {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error('Login failed');
      return response.json();
    },
    register: async (userData: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    }) => {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Registration failed');
      return response.json();
    },
    updateProfile: async (userData: {
      firstName?: string;
      lastName?: string;
      email?: string;
    }) => {
      const response = await fetch(`${API_BASE_URL}/auth/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Failed to update profile');
      return response.json();
    },
    changePassword: async (passwords: {
      currentPassword: string;
      newPassword: string;
    }) => {
      const response = await fetch(`${API_BASE_URL}/auth/password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(passwords),
      });
      if (!response.ok) throw new Error('Failed to change password');
      return response.json();
    },
  },
}; 