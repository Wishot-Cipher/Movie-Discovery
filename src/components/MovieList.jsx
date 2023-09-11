import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className="text-black">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="w-full h-40 object-cover mb-4"
            />
            <p className="text-gray-700 mb-4">{movie.overview}</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">
                Rating: {movie.vote_average}
              </span>
              <span className="text-gray-500">
                Release Date: {movie.release_date}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
