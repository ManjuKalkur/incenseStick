import React, { useState } from 'react';
import { ShoppingCart, Star, Heart, Menu, X, ChevronRight, Flame, Wind, Sparkles, FanIcon, Facebook, Instagram } from 'lucide-react';

import P1 from '../src/assets/P1.jpg'
import P2 from '../src/assets/P2.jpg'
import P3 from '../src/assets/P3.jpeg'

const products = [
  {
    id: 1,
    name: 'Premium Sandalwood Agarbatti',
    description: 'Pure sandalwood incense sticks with deep, woody aroma for meditation and relaxation',
    price: 199,
    image: P1,
    rating: 4.9,
    duration: '45 minutes',
    weight: '100 gms',
    quantity: '50 sticks',
    fragrance: 'Rich Sandalwood'
  },

  {
    id: 2,
    name: 'Lavender Dreams Agarbatti',
    description: 'Calming lavender fragrance for peaceful sleep and stress relief',
    price: 99,
    image: P2,
    rating: 4.8,
    duration: '40 minutes',
    weight: '80 gms',
    quantity: '40 sticks',
    fragrance: 'Soothing Lavender'
  },

  {
    id: 3,
    name: 'Sacred Patchouli Agarbatti',
    description: 'Exotic patchouli blend for spiritual practices and deep meditation',
    price: 199,
    image: P3,
    rating: 4.9,
    duration: '50 minutes',
    weight: '120 gms',
    quantity: '60 sticks',
    fragrance: 'Mystical Patchouli'
  },
  {
    id: 4,
    name: 'Mystic Rose Agarbatti',
    description: 'Premium rose fragrance for divine worship and peaceful ambiance',
    price: 99,
    image: P1,
    rating: 4.7,
    duration: '35 minutes',
    weight: '75 gms',
    quantity: '35 sticks',
    fragrance: 'Pure Rose'
  },
  {
    id: 5,
    name: 'Jasmine Bliss Agarbatti',
    description: 'Sweet jasmine fragrance for a serene and peaceful atmosphere',
    price: 200,
    image: P2,
    rating: 4.8,
    duration: '40 minutes',
    weight: '90 gms',
    quantity: '45 sticks',
    fragrance: 'Fresh Jasmine'
  },
  {
    id: 6,
    name: 'Lotus Temple Agarbatti',
    description: 'Sacred lotus fragrance for temple worship and meditation',
    price: 99,
    image: P3,
    rating: 4.9,
    duration: '45 minutes',
    weight: '100 gms',
    quantity: '50 sticks',
    fragrance: 'Divine Lotus'
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#faf6f1]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                className="sm:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center">
                {/* <Flame className="h-8 w-8 text-amber-600" /> */}
                <img src='src\assets\phoshak-logo.png'  width={200}></img>
                {/* <span className="text-xl font-semibold ml-2 text-amber-900">Divine Agarbatti</span> */}
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-8">
            <a href="#" className="block text-amber-900 hover:text-amber-700">Home</a>
            <a href="#" className="block text-amber-900 hover:text-amber-700">AboutUs</a>
            <a href="#" className="block text-amber-900 hover:text-amber-700">Shop Products</a>
            <a href="#" className="block text-amber-900 hover:text-amber-700">Blog</a>
            <a href="#" className="block text-amber-900 hover:text-amber-700">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative">
                <Heart size={24} className="text-amber-900" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden  fixed inset-0 z-50 bg-white pt-16">
          <div className="px-1 py-2 space-y-4">
            <a href="#" className="block text-amber-900 hover:text-amber-700">Home</a>
            <a href="#" className="block text-amber-900 hover:text-amber-700">AboutUs</a>
            <a href="#" className="block text-amber-900 hover:text-amber-700">Shop</a>
            <a href="#" className="block text-amber-900 hover:text-amber-700">Blog</a>
            <a href="#" className="block text-amber-900 hover:text-amber-700">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-screen "
            src='src\assets\Landing1.png'
            // src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=2000"
            alt="Agarbatti background"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70"></div> */}
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Sacred Agarbatti Collection
            </h1>
            <p className="mt-6 text-xl text-amber-100 max-w-3xl mx-auto">
              Discover our premium range of hand-crafted incense sticks, featuring pure ingredients and traditional fragrances for your spiritual journey.
            </p> */}
            <div className="mt-80 flex justify-center space-x-6">
              <a
                href="#shop"
                className="inline-flex items-center px-4 py-3 border-2 border-amber-400 text-base font-medium rounded-full text-white bg-transparent hover:bg-amber-400 transition-colors duration-300"
              >
                Explore Collection
                <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl -mt-40 font-extrabold text-amber-900 sm:text-4xl">
            Premium Fragrances
          </h2>
          <p className="mt-4 text-lg text-amber-700">
            Each stick is carefully crafted using traditional methods and pure ingredients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-amber-100"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-amber-50"
                >
                  <Heart size={20} className="text-amber-700" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-white font-medium">{product.fragrance}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="text-amber-400" size={20} />
                  <span className="ml-1 text-amber-700">{product.rating}</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-amber-700 text-sm mb-4">{product.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-amber-600 mb-4">
                  <div className="flex items-center">
                    <Flame size={16} className="mr-1" />
                    <span>{product.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <span>{product.quantity}</span>
                  </div>
                  <div className="flex items-center">
                    <span>{product.weight}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-900">
                    Rs{product.price}
                  </span>
                  <button
                    onClick={addToCart}
                    className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="bg-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-amber-900 sm:text-4xl">
              Why Choose Our Agarbatti?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Sparkles className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Pure Ingredients</h3>
              <p className="text-amber-700">
                Made with natural essential oils and premium raw materials for authentic fragrance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Flame className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Long-Lasting</h3>
              <p className="text-amber-700">
                Slow-burning sticks that provide lasting fragrance throughout your ritual
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Wind className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Natural Aroma</h3>
              <p className="text-amber-700">
                Traditional manufacturing process that preserves the authentic fragrance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact"  className="bg-amber-900 text-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <img src="src\assets\phoshak-logo.png" alt="" />
                {/* <Flame className="h-6 w-6 text-amber-400" /> */}
                {/* <h3 className="text-lg font-semibold ml-2">Divine Agarbatti</h3> */}
              </div>
              <p className="text-amber-300">
                Bringing divine fragrance to your spiritual journey through traditional agarbatti craftsmanship.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-amber-300 hover:text-white">About Us</a></li>
                <li><a href="#shop" className="text-amber-300 hover:text-white">Shop</a></li>
                <li><a href="#benefits" className="text-amber-300 hover:text-white">Blogs</a></li>
                <li><a href="#contact" className="text-amber-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-amber-300">
                <li>Rajalakshmi</li>
                <li>247, 3rd Main Post Box.1834,Chamarajpet,</li>
                <li>Bangalore, Karnataka, India</li>
                <li>500018</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
              <p className="text-amber-300 mb-4">
                Subscribe for sacred updates and special offers.
              </p>
              <div className='x'>
              <Facebook/> <Instagram/> 
              </div>
              {/* <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-full w-full bg-amber-800 text-amber-100 placeholder-amber-400 border-2 border-amber-700 focus:outline-none focus:border-amber-500"
                />
                <button className="px-6 py-2 bg-amber-600 text-white rounded-r-full hover:bg-amber-500 transition-colors duration-300">
                  Join
                </button>
              </div> */}
            </div>
          </div>
          <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-400">
            <p>&copy; 2025 Rajalakshmi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;