import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { 
  FiShoppingCart, 
  FiUser, 
  FiMenu, 
  FiX, 
  FiSearch, 
  FiLogOut, 
  FiPackage, 
  FiSettings,
  FiUser as FiMan,
  FiUser as FiWoman,
  FiTag,
  FiGlobe,
  FiHeart,
  FiStar,
  FiTruck
} from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    setIsProfileDropdownOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  // Product categories for mobile menu
  const productCategories = [
    {
      id: 'all',
      name: 'All Sneakers',
      icon: <FiGlobe className="text-blue-600" size={20} />,
      description: 'Complete collection',
      color: 'bg-blue-50',
      count: 125
    },
    {
      id: 'men',
      name: "Men's Collection",
      icon: <FiMan className="text-gray-800" size={20} />,
      description: 'Latest trends for men',
      color: 'bg-gray-50',
      count: 68
    },
    {
      id: 'women',
      name: "Women's Collection",
      icon: <FiWoman className="text-pink-600" size={20} />,
      description: 'Stylish sneakers for women',
      color: 'bg-pink-50',
      count: 42
    },
    {
      id: 'accessories',
      name: 'Accessories',
      icon: <FiTag className="text-purple-600" size={20} />,
      description: 'Shoelaces, cleaning kits & more',
      color: 'bg-purple-50',
      count: 15
    },
    {
      id: 'featured',
      name: 'Featured',
      icon: <FiStar className="text-yellow-600" size={20} />,
      description: 'Best sellers & new arrivals',
      color: 'bg-yellow-50',
      count: 24
    },
    {
      id: 'sale',
      name: 'On Sale',
      icon: <FiHeart className="text-red-600" size={20} />,
      description: 'Up to 50% off',
      color: 'bg-red-50',
      count: 18
    }
  ];

  // Popular brands
  const popularBrands = ['Nike', 'Adidas', 'Jordan', 'New Balance', 'Puma', 'Converse'];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-tight">
              SNEAKER.INC
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search sneakers, brands, styles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-shadow"
              />
              <FiSearch className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-blue-600 transition font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              All Sneakers
            </Link>
            
            <Link 
              to="/products?category=men" 
              className="text-gray-700 hover:text-blue-600 transition font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              Men
            </Link>
            
            <Link 
              to="/products?category=women" 
              className="text-gray-700 hover:text-blue-600 transition font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              Women
            </Link>
            
            <Link 
              to="/products?category=accessories" 
              className="text-gray-700 hover:text-blue-600 transition font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              Accessories
            </Link>
            
            {/* Cart Icon */}
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-700 hover:text-blue-600 transition rounded-lg hover:bg-gray-50 group mx-2"
            >
              <FiShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            
            {/* Profile Icon (Next to Cart) */}
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition group"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {user?.first_name?.[0]?.toUpperCase() || user?.username?.[0]?.toUpperCase() || 'U'}
                  </div>
                </button>
                
                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsProfileDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="font-semibold text-gray-800">
                          {user?.first_name} {user?.last_name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                      </div>
                      
                      <div className="py-1">
                        <Link
                          to="/profile"
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition group"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <FiUser className="mr-3" size={18} />
                          <span>My Profile</span>
                        </Link>
                        <Link
                          to="/orders"
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition group"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <FiPackage className="mr-3" size={18} />
                          <span>My Orders</span>
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition group"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <FiSettings className="mr-3" size={18} />
                          <span>Settings</span>
                        </Link>
                      </div>
                      
                      <div className="border-t border-gray-100 py-1">
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 transition group"
                        >
                          <FiLogOut className="mr-3" size={18} />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="p-2 text-gray-700 hover:text-blue-600 transition rounded-lg hover:bg-gray-50"
              >
                <FiUser size={24} />
              </Link>
            )}
          </div>

          {/* Mobile Icons (Cart & Profile next to Toggle) */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Cart Icon */}
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-700 hover:text-blue-600 transition rounded-lg hover:bg-gray-100"
            >
              <FiShoppingCart size={22} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            
            {/* Profile Icon */}
            {isAuthenticated ? (
              <button 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 transition rounded-lg hover:bg-gray-100"
              >
                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  {user?.first_name?.[0]?.toUpperCase() || user?.username?.[0]?.toUpperCase() || 'U'}
                </div>
              </button>
            ) : (
              <Link
                to="/login"
                className="p-2 text-gray-700 hover:text-blue-600 transition rounded-lg hover:bg-gray-100"
              >
                <FiUser size={22} />
              </Link>
            )}
            
            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto animate-slide-left">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">SNEAKER.INC</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-700 hover:text-blue-600 transition rounded-lg hover:bg-gray-100"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-gray-100">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search sneakers, brands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium"
                  >
                    Go
                  </button>
                </div>
              </form>
            </div>

            {/* User Info (if logged in) */}
            {isAuthenticated && (
              <div className="px-4 py-3 border-b border-gray-100 bg-blue-50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {user?.first_name?.[0]?.toUpperCase() || user?.username?.[0]?.toUpperCase() || 'U'}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {user?.first_name} {user?.last_name}
                    </p>
                    <p className="text-sm text-gray-500">Welcome back!</p>
                  </div>
                </div>
              </div>
            )}

            {/* Featured Categories */}
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FiTag className="mr-2" />
                Shop Categories
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {productCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/products?category=${category.id}`}
                    className={`${category.color} p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:scale-[1.02]`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      {category.icon}
                      <span className="text-xs font-semibold text-gray-600 bg-white px-2 py-1 rounded-full">
                        {category.count}+
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900">{category.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">{category.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  to="/orders"
                  className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiPackage className="mr-3" />
                  <span>My Orders</span>
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiHeart className="mr-3" />
                  <span>Wishlist</span>
                </Link>
                <Link
                  to="/track-order"
                  className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiTruck className="mr-3" />
                  <span>Track Order</span>
                </Link>
              </div>
            </div>

            {/* Popular Brands */}
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Brands</h3>
              <div className="flex flex-wrap gap-2">
                {popularBrands.map((brand) => (
                  <Link
                    key={brand}
                    to={`/products?brand=${brand.toLowerCase()}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {brand}
                  </Link>
                ))}
              </div>
            </div>

            {/* Account Actions */}
            <div className="p-4">
              {isAuthenticated ? (
                <div className="space-y-2">
                  <Link
                    to="/profile"
                    className="block w-full text-center py-3 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-center py-3 px-4 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    className="block w-full text-center py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full text-center py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Create Account
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;