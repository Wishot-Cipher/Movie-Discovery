import React from 'react';
import { ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom';

const MovieCard = ({ title, releaseDate, posterUrl, handleFavoriteToggle, id, voteAverage, favorites }) => {
  // Convert releaseDate to UTC format
  const formatDateToUTC = (releaseDate) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(releaseDate).toLocaleDateString('en-US', options);
};
  const utcReleaseDate = formatDateToUTC(releaseDate);


  return (
    <div className="text-black relative" data-testid="movie-card">
      <div
        className="bg-white p-4 shadow  flex flex-col justify-between rounded-lg h-full"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Link to={`/movies/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterUrl}`}
            alt={`${title} Poster`}
            className="w-full object-cover h-[50vh] lg_pro:h-[58vh] mb-1 object-center rounded-lg"
            data-testid="movie-poster"
          />
          <h2 className="text-xl font-extrabold mt-auto mb-4  text-shadow2" data-testid="movie-title">
            {title}
          </h2>
        </Link>
        {/* <ToastContainer /> */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-bold text-sm" data-testid="movie-vote-average">
            ⭐Rating: {voteAverage}
          </span>
          <span className="text-gray-600 font-bold text-sm" data-testid="movie-release-date">
            📅: {utcReleaseDate}
          </span>
        </div>
      </div>
      <button
        className={`absolute top-6 text-2xl right-8 text-red-500 ${
          favorites.includes(id) ? "opacity-100" : "opacity-50"
        } bg-white rounded-full p-[2px]`}
        onClick={() => handleFavoriteToggle(id)}
      >
        ❤️
      </button>
    </div>
  );
};

export default MovieCard;