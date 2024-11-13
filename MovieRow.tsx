import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const scrollLeft = () => {
    const slider = document.getElementById(`slider-${title}`);
    if (slider) slider.scrollLeft -= slider.offsetWidth;
  };

  const scrollRight = () => {
    const slider = document.getElementById(`slider-${title}`);
    if (slider) slider.scrollLeft += slider.offsetWidth;
  };

  return (
    <div className="px-4 md:px-8 mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="relative group">
        <ChevronLeft
          className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 rounded-full p-2 cursor-pointer z-10 hidden group-hover:block hover:bg-black/80"
          onClick={scrollLeft}
        />
        
        <div
          id={`slider-${title}`}
          className="flex gap-2 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-none w-[200px] transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded object-cover w-full h-[300px] cursor-pointer"
              />
            </div>
          ))}
        </div>

        <ChevronRight
          className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 rounded-full p-2 cursor-pointer z-10 hidden group-hover:block hover:bg-black/80"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

export default MovieRow;