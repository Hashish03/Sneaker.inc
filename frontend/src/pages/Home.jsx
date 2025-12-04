import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchCategories } from '../store/slices/productSlice';
import ProductCard from '../components/products/ProductCard';
import { FiArrowRight, FiTrendingUp, FiStar, FiClock, FiShoppingBag, FiChevronRight } from 'react-icons/fi';

const Home = () => {
  const dispatch = useDispatch();
  const { products, categories, isLoading } = useSelector((state) => state.products);
  const [currentImage, setCurrentImage] = useState(0);
  
  // Array of sneaker background images (using placeholder images)
  const backgroundImages = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1920&h=1080&fit=crop',
  ];

  // Trending sneaker brands
  const trendingBrands = [
    { name: 'Nike', logo: 'https://cdn.worldvectorlogo.com/logos/nike-6.svg', count: 68 },
    { name: 'Adidas', logo: 'https://cdn.worldvectorlogo.com/logos/adidas-2023-logo.svg', count: 54 },
    { name: 'Jordan', logo: 'https://cdn.worldvectorlogo.com/logos/air-jordan-3.svg', count: 42 },
    { name: 'New Balance', logo: 'https://cdn.worldvectorlogo.com/logos/new-balance-1.svg', count: 36 },
    { name: 'Puma', logo: 'https://cdn.worldvectorlogo.com/logos/puma-logo-1.svg', count: 28 },
    { name: 'Converse', logo: 'https://cdn.worldvectorlogo.com/logos/converse-all-star.svg', count: 24 },
  ];

  // Collections
  const collections = [
    {
      id: 1,
      name: "Limited Edition",
      description: "Exclusive drops & rare finds",
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&fit=crop",
      count: 12,
      color: "bg-gradient-to-r from-purple-600 to-pink-600"
    },
    {
      id: 2,
      name: "Summer Collection",
      description: "Lightweight & breathable styles",
      image: "https://images.unsplash.com/photo-1549298916-f52d724204b4?w=800&fit=crop",
      count: 28,
      color: "bg-gradient-to-r from-orange-500 to-yellow-500"
    },
    {
      id: 3,
      name: "Basketball Elite",
      description: "Performance & style combined",
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&fit=crop",
      count: 18,
      color: "bg-gradient-to-r from-blue-600 to-cyan-600"
    },
    {
      id: 4,
      name: "Street Style",
      description: "Urban fashion essentials",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&fit=crop",
      count: 34,
      color: "bg-gradient-to-r from-gray-900 to-gray-700"
    },
  ];

  useEffect(() => {
    dispatch(fetchProducts({ page_size: 12 }));
    dispatch(fetchCategories());
    
    // Auto-slide background images
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch, backgroundImages.length]);

  const goToNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images with Transition */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-1000 ease-in-out"
            style={{
              opacity: currentImage === index ? 1 : 0,
              transform: `scale(${currentImage === index ? 1.05 : 1})`,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden={currentImage !== index}
          />
        ))}
        
        {/* Animated Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 border border-white/20">
                🚀 New Arrivals Every Week
              </span>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tighter">
                STEP INTO
                <span className="block mt-2 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  SNEAKER.INC
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                Discover exclusive sneaker drops, premium collections, and streetwear essentials from the world's top brands.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/products"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                <span className="relative z-10">Shop Collection</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-full group-hover:from-gray-100 group-hover:to-white transition-all"></div>
                <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/products?new=true"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <span>View New Drops</span>
                <FiTrendingUp className="ml-3 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-300">Sneaker Models</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-300">Brand Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">24h</div>
                <div className="text-sm text-gray-300">Fast Shipping</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">10K+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevImage}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
          aria-label="Previous image"
        >
          <div className="w-6 h-6 group-hover:-translate-x-1 transition-transform">←</div>
        </button>
        <button
          onClick={goToNextImage}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
          aria-label="Next image"
        >
          <div className="w-6 h-6 group-hover:translate-x-1 transition-transform">→</div>
        </button>
        
        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`group relative rounded-full transition-all duration-500 ${
                currentImage === index 
                  ? 'w-24 h-1 bg-white' 
                  : 'w-4 h-1 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentImage === index}
            >
              {currentImage === index && (
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Slide {index + 1}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Trending Brands Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <FiTrendingUp className="text-blue-600" size={24} />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Trending Now</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Sneaker Brands</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Shop from the world's most iconic sneaker brands
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trendingBrands.map((brand) => (
              <Link
                key={brand.name}
                to={`/products?brand=${brand.name.toLowerCase()}`}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="h-16 mb-4 flex items-center justify-center">
                  <div className="w-24 h-12 bg-contain bg-center bg-no-repeat opacity-80 group-hover:opacity-100 transition-opacity"
                       style={{ backgroundImage: `url(${brand.logo})` }}
                  ></div>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2">{brand.name}</h3>
                <div className="text-center">
                  <span className="inline-flex items-center text-sm text-gray-500">
                    <FiShoppingBag className="mr-1" size={14} />
                    {brand.count} models
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 mb-4">
                <FiStar className="text-purple-600" size={24} />
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Curated Collections</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Handpicked selections for every style and occasion
              </p>
            </div>
            <Link
              to="/collections"
              className="group inline-flex items-center text-blue-600 font-semibold mt-4 lg:mt-0"
            >
              View all collections
              <FiChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to={`/collections/${collection.id}`}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 ${collection.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{collection.name}</h3>
                      <p className="text-gray-200 text-sm">{collection.description}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-white font-bold">{collection.count} items</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-3">
                    <FiArrowRight className="text-gray-900" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find your perfect sneakers by category
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categories.slice(0, 10).map((category, index) => {
                const colors = [
                  'bg-gradient-to-br from-blue-500 to-blue-600',
                  'bg-gradient-to-br from-purple-500 to-purple-600',
                  'bg-gradient-to-br from-pink-500 to-pink-600',
                  'bg-gradient-to-br from-orange-500 to-orange-600',
                  'bg-gradient-to-br from-green-500 to-green-600',
                ];
                
                return (
                  <Link
                    key={category.id || category.name}
                    to={`/products?category=${category.id || category.name}`}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className={`aspect-square ${colors[index % colors.length]} flex flex-col items-center justify-center p-6`}>
                      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {category.icon || '👟'}
                      </div>
                      <h3 className="text-lg font-bold text-white text-center">
                        {category.name}
                      </h3>
                    </div>
                    
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-colors duration-300"></div>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                        <span className="text-white text-sm font-medium">
                          Shop now
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 mb-4">
                <FiClock className="text-orange-600" size={24} />
                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Just Dropped</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Latest sneaker releases and trending styles
              </p>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition-all duration-300 mt-4 lg:mt-0"
            >
              View all products
              <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-300 rounded-full animate-spin animation-delay-500"></div>
              </div>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl">
              <div className="text-6xl mb-4">👟</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Our latest sneaker drops are on their way. Check back soon for amazing new arrivals!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-8">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">Join the Community</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6">
            Never Miss a Drop
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Be the first to know about exclusive releases, early access, and special member discounts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-2 text-left ml-4">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>
            
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all hover:shadow-2xl"
            >
              <span>Join Free</span>
              <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
        
        </div>
      </section>
    </div>
  );
};

export default Home;