import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;


const FavoritesPage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteMovies(favorites);
  }, []);

  const [moviesDetails, setMoviesDetails] = useState([]);

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      const promises = favoriteMovies.map(async (movieId) => {
        const response = await axios.get(`/movie/${movieId}`, {
          params: {
            api_key:apiKey, // Replace with your API key
          },
        });
        return response.data;
      });

      const moviesData = await Promise.all(promises);
      setMoviesDetails(moviesData);
    };

    if (favoriteMovies.length > 0) {
      fetchMoviesDetails();
    }
  }, [favoriteMovies]);

  return (
    <div className=" mx-auto mt-8">
      <ul className="text-left space-y-8 flex-col mb-4">
        <li className=" text-center font-bold">
          <Link to="/" className=" text-white text-md bg-gray-700 px-4 py-2 my-4 rounded-lg shadow-xl">
           Back To Home
          </Link>
        </li>
      </ul>
      <h1 className="text-3xl font-extrabold mb-4 mx-4">Favorite Movies ❤️..</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {moviesDetails.map((movie, index) => (
          <div
            className="bg-white p-4 shadow h-full flex flex-col justify-between rounded-lg"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.title} Poster`}
                className="w-full object-cover h-[90%] mb-4 object-center rounded-lg"
              />
              <h2 className="text-xl font-bold mt-auto mb-2">{movie.title}</h2>
            </Link>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-semibold">
              ⭐Rating: {movie.vote_average}
              </span>
              <span className="text-gray-600 font-semibold">
              📅Year: {new Date(movie.release_date).getFullYear()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
