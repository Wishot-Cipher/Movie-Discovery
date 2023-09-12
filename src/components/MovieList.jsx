import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className="text-black">
          <div
            className="bg-white p-4 rounded shadow h-full flex flex-col justify-between"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="w-full object-cover h-[90%] mb-4 object-center"
            />
            <h2 className="text-xl font-bold mt-auto mb-2">{movie.title}</h2>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-semibold">
                Rating: {movie.vote_average}
              </span>
              <span className="text-gray-500 font-semibold">
                Release Date: {new Date(movie.release_date).getFullYear()}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
