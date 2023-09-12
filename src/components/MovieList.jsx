import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteToggle = (movieId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(movieId)) {
        return prevFavorites.filter(id => id !== movieId);
      } else {
        return [...prevFavorites, movieId];
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-2">
      {movies.map((movie) => (
        <div key={movie.id} className="text-black">
          <div className="bg-white p-4 shadow h-full flex flex-col justify-between rounded-lg"
           style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.title} Poster`}
                className="w-full object-cover h-[90%] mb-1 object-center rounded-lg"
              />
              <h2 className="text-xl font-bold mt-auto mb-4">{movie.title}</h2>
            </Link>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-semibold">
                Rating: {movie.vote_average}
              </span>
              <span className="text-gray-500 font-semibold">
                Release Date: {new Date(movie.release_date).getFullYear()}
              </span>
              <button
                className={`text-red-500 ${favorites.includes(movie.id) ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => handleFavoriteToggle(movie.id)}
              >
                ❤️
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
