import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiCreditCard, 
  FiTruck, 
  FiShield, 
  FiHeadphones,
  FiSend,
  FiCheck,
  FiHeart
} from 'react-icons/fi';
import { SiVisa, SiMastercard, SiPaypal, SiApplepay, SiAmericanexpress } from 'react-icons/si';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Banner */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <FiTruck className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-sm text-gray-400">On orders over $50</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-green-500/20 p-3 rounded-full">
                <FiShield className="text-green-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Secure Payment</h4>
                <p className="text-sm text-gray-400">100% secure</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-full">
                <FiCheck className="text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">30-Day Returns</h4>
                <p className="text-sm text-gray-400">Hassle free returns</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-red-500/20 p-3 rounded-full">
                <FiHeadphones className="text-red-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-sm text-gray-400">Customer support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SNEAKER.INC
              </Link>
              <p className="text-gray-400 mt-2 max-w-md">
                Premium sneakers and streetwear from top brands. Discover exclusive drops, limited editions, and timeless classics.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <FiMapPin />
                <span>123 Sneaker Street, Fashion District, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FiPhone />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FiMail />
                <span>support@sneaker.inc</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <FiFacebook />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <FiTwitter />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-all hover:scale-110"
                  aria-label="YouTube"
                >
                  <FiYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Shop
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>
            </h4>
            <ul className="space-y-3">
              {['New Arrivals', "Men's Sneakers", "Women's Sneakers", 'Basketball', 'Running', 'Lifestyle', 'Limited Edition', 'Sale'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/products?category=${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Support
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"></span>
            </h4>
            <p className="text-gray-400 mb-4">
              Get exclusive access to early drops, special offers, and sneaker news.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1.5 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all flex items-center space-x-2"
                >
                  <FiSend />
                  <span>Join</span>
                </button>
              </div>
              
              {subscribed && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-2 rounded-lg animate-fade-in">
                  <FiCheck />
                  <span>Subscribed successfully!</span>
                </div>
              )}
              
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>

            {/* Payment Methods */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h5 className="text-sm font-semibold mb-3 text-gray-400">Secure Payments</h5>
              <div className="flex space-x-2">
                <SiVisa className="text-gray-400 hover:text-white transition-colors" size={32} />
                <SiMastercard className="text-gray-400 hover:text-white transition-colors" size={32} />
                <SiPaypal className="text-gray-400 hover:text-white transition-colors" size={32} />
                <SiApplepay className="text-gray-400 hover:text-white transition-colors" size={32} />
                <SiAmericanexpress className="text-gray-400 hover:text-white transition-colors" size={32} />
                <FiCreditCard className="text-gray-400 hover:text-white transition-colors" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} SNEAKER.INC. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-white transition">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-500 hover:text-white transition">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-white transition">
                Sitemap
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 mt-4 md:mt-0 text-gray-500">
              <FiHeart className="text-red-500 animate-pulse" />
              <span className="text-sm">Crafted with passion for sneakerheads</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;