import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="text-red-600 text-2xl font-bold">NETFLIX</div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm hover:text-gray-300">Home</a>
              <a href="#" className="text-sm hover:text-gray-300">TV Shows</a>
              <a href="#" className="text-sm hover:text-gray-300">Movies</a>
              <a href="#" className="text-sm hover:text-gray-300">New & Popular</a>
              <a href="#" className="text-sm hover:text-gray-300">My List</a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <div className="flex items-center gap-2 cursor-pointer group">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Profile"
                className="w-8 h-8 rounded"
              />
              <ChevronDown className="w-4 h-4 group-hover:text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;