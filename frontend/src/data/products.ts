export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'women' | 'men' | 'accessories';
  sizes: string[];
  description: string;
  color: string;
  brand: string;
}

export const products: Product[] = [
  // Women's Products
  {
    id: 'w1',
    name: 'Elegant Floral Dress',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1974',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A beautiful floral dress perfect for spring and summer occasions.',
    color: 'Blue with White Flowers',
    brand: 'Spring Collection'
  },
  {
    id: 'w2',
    name: 'Classic Black Blazer',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936',
    category: 'women',
    sizes: ['S', 'M', 'L'],
    description: 'A versatile black blazer that can be dressed up or down.',
    color: 'Black',
    brand: 'Urban Style'
  },
  {
    id: 'w3',
    name: 'Casual Denim Jacket',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936',
    category: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A comfortable denim jacket for everyday wear.',
    color: 'Light Blue',
    brand: 'Denim Co.'
  },
  {
    id: 'w4',
    name: 'Summer Maxi Dress',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1974',
    category: 'women',
    sizes: ['S', 'M', 'L'],
    description: 'A flowing maxi dress perfect for summer days.',
    color: 'Coral',
    brand: 'Summer Breeze'
  },
  {
    id: 'w5',
    name: 'Leather Ankle Boots',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780',
    category: 'women',
    sizes: ['5', '6', '7', '8', '9', '10'],
    description: 'Classic leather ankle boots that go with everything.',
    color: 'Brown',
    brand: 'Leather Works'
  },
  {
    id: 'w6',
    name: 'Silk Blouse',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1974',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'A luxurious silk blouse for formal occasions.',
    color: 'Ivory',
    brand: 'Luxury Basics'
  },
  {
    id: 'w7',
    name: 'High-Waisted Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974',
    category: 'women',
    sizes: ['26', '28', '30', '32', '34'],
    description: 'Comfortable high-waisted jeans with a flattering fit.',
    color: 'Dark Blue',
    brand: 'Denim Co.'
  },
  {
    id: 'w8',
    name: 'Knit Sweater',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1974',
    category: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A cozy knit sweater for cold weather.',
    color: 'Cream',
    brand: 'Winter Warmth'
  },
  {
    id: 'w9',
    name: 'Pleated Skirt',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1974',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'A versatile pleated skirt that can be styled in many ways.',
    color: 'Navy',
    brand: 'Classic Cuts'
  },
  {
    id: 'w10',
    name: 'Crossbody Bag',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935',
    category: 'women',
    sizes: ['One Size'],
    description: 'A practical crossbody bag for everyday use.',
    color: 'Tan',
    brand: 'Accessory World'
  },

  // Men's Products
  {
    id: 'm1',
    name: 'Classic Oxford Shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1974',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A timeless oxford shirt for formal and casual occasions.',
    color: 'White',
    brand: 'Classic Menswear'
  },
  {
    id: 'm2',
    name: 'Slim Fit Chinos',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1974',
    category: 'men',
    sizes: ['28', '30', '32', '34', '36', '38'],
    description: 'Comfortable slim fit chinos for a modern look.',
    color: 'Khaki',
    brand: 'Modern Fit'
  },
  {
    id: 'm3',
    name: 'Leather Jacket',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A classic leather jacket that never goes out of style.',
    color: 'Black',
    brand: 'Leather Works'
  },
  {
    id: 'm4',
    name: 'Denim Jeans',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974',
    category: 'men',
    sizes: ['30', '32', '34', '36', '38', '40'],
    description: 'Classic denim jeans with a comfortable fit.',
    color: 'Blue',
    brand: 'Denim Co.'
  },
  {
    id: 'm5',
    name: 'Wool Overcoat',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A warm wool overcoat for cold weather.',
    color: 'Charcoal',
    brand: 'Winter Warmth'
  },
  {
    id: 'm6',
    name: 'Polo Shirt',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1974',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A classic polo shirt for casual wear.',
    color: 'Navy',
    brand: 'Sport Style'
  },
  {
    id: 'm7',
    name: 'Suit Set',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936',
    category: 'men',
    sizes: ['S', 'M', 'L'],
    description: 'A complete suit set for formal occasions.',
    color: 'Gray',
    brand: 'Formal Wear'
  },
  {
    id: 'm8',
    name: 'Hooded Sweatshirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1974',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A comfortable hooded sweatshirt for casual wear.',
    color: 'Gray',
    brand: 'Urban Style'
  },
  {
    id: 'm9',
    name: 'Dress Shoes',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780',
    category: 'men',
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    description: 'Classic dress shoes for formal occasions.',
    color: 'Black',
    brand: 'Leather Works'
  },
  {
    id: 'm10',
    name: 'T-Shirt Pack',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1974',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A pack of 3 basic t-shirts for everyday wear.',
    color: 'Assorted',
    brand: 'Basics'
  },

  // Accessories
  {
    id: 'a1',
    name: 'Leather Wallet',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974',
    category: 'accessories',
    sizes: ['One Size'],
    description: 'A classic leather wallet with multiple card slots.',
    color: 'Brown',
    brand: 'Leather Works'
  },
  {
    id: 'a2',
    name: 'Sunglasses',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1780',
    category: 'accessories',
    sizes: ['One Size'],
    description: 'Stylish sunglasses with UV protection.',
    color: 'Black',
    brand: 'Sun Style'
  },
  {
    id: 'a3',
    name: 'Watch',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1524803795948-dbc2a9f1b8b1?q=80&w=1974',
    category: 'accessories',
    sizes: ['One Size'],
    description: 'A classic watch with leather strap.',
    color: 'Silver with Brown Strap',
    brand: 'Time Keeper'
  },
  {
    id: 'a4',
    name: 'Scarf',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1974',
    category: 'accessories',
    sizes: ['One Size'],
    description: 'A warm scarf for cold weather.',
    color: 'Camel',
    brand: 'Winter Warmth'
  },
  {
    id: 'a5',
    name: 'Belt',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974',
    category: 'accessories',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A classic leather belt.',
    color: 'Brown',
    brand: 'Leather Works'
  },
  {
    id: 'a6',
    name: 'Backpack',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1780',
    category: 'accessories',
    sizes: ['One Size'],
    description: 'A practical backpack for everyday use.',
    color: 'Black',
    brand: 'Urban Style'
  },
  {
    id: 'a7',
    name: 'Jewelry Set',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974',
    category: 'accessories',
    sizes: ['One Size'],
    description: 'A set of matching jewelry pieces.',
    color: 'Gold',
    brand: 'Glamour'
  },
  {
    id: 'a8',
    name: 'Hair Accessories',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1596033389715-beef1b5331ab?q=80&w=1974',
    category: 'accessories',
    sizes: ['One Size'],
    description: 'A set of hair accessories for styling.',
    color: 'Assorted',
    brand: 'Hair Style'
  },
  {
    id: 'a9',
    name: 'Phone Case',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1974',
    category: 'accessories',
    sizes: ['One Size'],
    description: 'A protective phone case with stylish design.',
    color: 'Black',
    brand: 'Tech Style'
  },
  {
    id: 'a10',
    name: 'Perfume',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1974',
    category: 'accessories',
    sizes: ['One Size'],
    description: 'A luxurious perfume with a lasting scent.',
    color: 'Clear',
    brand: 'Fragrance World'
  }
]; 