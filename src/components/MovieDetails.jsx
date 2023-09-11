import React from 'react';

const MovieDetails = ({ title, releaseDate, runtime, overview, posterPath }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg flex flex-col items-center w-[70%]">
      <div className="mb-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={`${title} Poster`}
          className="w-full h-[40vh] max-w-[60vw] object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold mb-1 text-center">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">Release Date: {releaseDate}</p>
      <p className="text-sm text-gray-600 mb-2">Runtime: {runtime} minutes</p>
      <p className="text-center">{overview}</p>
    </div>
  );
};

export default MovieDetails;
