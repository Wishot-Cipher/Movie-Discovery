import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, releaseDate, posterUrl, handleFavoriteToggle, id, voteAverage, favorites }) => {
  return (
    <div className="text-black relative" data-testid="movie-card">
      <div
        className="bg-white p-4 shadow h-full flex flex-col justify-between rounded-lg"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Link to={`/movies/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterUrl}`}
            alt={`${title} Poster`}
            className="w-full object-cover h-[90%] mb-1 object-center rounded-lg"
            data-testid="movie-poster"
          />
          <h2 className="text-xl font-bold mt-auto mb-4" data-testid="movie-title">
            {title}
          </h2>
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-semibold" data-testid="movie-vote-average">
            Rating: {voteAverage}
          </span>
          <span className="text-gray-500 font-semibold" data-testid="movie-release-date">
            Release Date: {new Date(releaseDate).toUTCString()}
          </span>
        </div>
      </div>
      <button
        className={`absolute top-6 text-2xl right-8 text-red-500 ${
          favorites.includes(id) ? "opacity-100" : "opacity-50"
        } bg-white rounded-full p-[1px]`}
        onClick={() => handleFavoriteToggle(id)}
      >
        ❤️
      </button>
    </div>
  );
};

export default MovieCard;
