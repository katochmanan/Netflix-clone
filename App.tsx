import React, { useState, useEffect } from 'react';
import { Play, Info, Bell, Search, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import MovieRow from './components/MovieRow';
import { movies } from './data/movies';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <div className="relative h-[90vh] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="absolute bottom-32 left-12 max-w-xl">
          <h1 className="text-6xl font-bold mb-4">Inception</h1>
          <p className="text-lg mb-6">
            A thief who enters the dreams of others to steal secrets from their subconscious gets a chance at redemption when he is offered a task that could change everything.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded hover:bg-white/90 transition">
              <Play className="w-6 h-6" /> Play
            </button>
            <button className="flex items-center gap-2 bg-gray-500/70 text-white px-8 py-3 rounded hover:bg-gray-500/50 transition">
              <Info className="w-6 h-6" /> More Info
            </button>
          </div>
        </div>
      </div>

      {/* Movie Rows */}
      <div className="relative z-10 -mt-32 pb-20">
        <MovieRow title="Trending Now" movies={movies.trending} />
        <MovieRow title="Popular on Netflix" movies={movies.popular} />
        <MovieRow title="New Releases" movies={movies.newReleases} />
        <MovieRow title="Watch Again" movies={movies.watchAgain} />
      </div>
    </div>
  );
}

export default App;