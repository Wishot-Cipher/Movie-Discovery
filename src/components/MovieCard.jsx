// MovieCard.js

import React, { useState } from 'react';

const MovieCard = ({ title, releaseDate, posterUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const movie = { title, releaseDate, posterUrl };

    const updatedFavorites = isFavorite
      ? favorites.filter((m) => m.title !== title)
      : [...favorites, movie];

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white p-4 rounded shadow h-full flex flex-col justify-between">
      <img
        src={posterUrl}
        alt={`${title} Poster`}
        className="w-full object-cover h-[90%] mb-4 object-center"
      />
      <h2 className="text-xl font-bold mt-auto mb-2">{title}</h2>
      <button onClick={handleToggleFavorite} className="bg-blue-500 text-white px-4 py-2 rounded">
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieCard;
