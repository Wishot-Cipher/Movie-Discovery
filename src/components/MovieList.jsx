import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteToggle = (movieId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movieId)) {
        return prevFavorites.filter((id) => id !== movieId);
      } else {
        return [...prevFavorites, movieId];
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-2">
      {movies.map((movie) => (
         <div key={movie.id}>
         <MovieCard
         title={movie.title}
         releaseDate={movie.release_date}
         posterUrl={movie.poster_path}
         handleFavoriteToggle={handleFavoriteToggle}
         id={movie.id}
         voteAverage={movie.vote_average}
         favorites={favorites}
         />
         </div>
      ))}
    </div>
  );
};

export default MovieList;
