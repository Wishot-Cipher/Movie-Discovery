import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          posterUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      ))}
    </div>
  );
};

export default MovieList;
