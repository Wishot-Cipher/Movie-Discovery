import React from "react";
import logo1 from "../assets/logo2.png";
import { Link } from "react-router-dom";

const MovieDetails = ({
  title,
  releaseDate,
  runtime,
  overview,
  posterPath,
  voteAverage,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-2">
      {/* Sidebar */}
      <div className="lg:col-span-1 bg-gray-200 p-2 h-auto lg:h-screen shadow-lg">
        <img
          src={logo1}
          className="object-cover max-w-[55%] h-auto lg:pro:mb-24 mb-4"
          alt=""
        />
        <ul className="text-left space-y-8 flex-col mb-8">
          <li className=" text-center font-bold">
            <Link
              to="/"
              className=" text-white text-md bg-gray-700 px-4 py-2 my-4 rounded-lg shadow-xl"
            >
              Back To Home
            </Link>
          </li>
          <li className=" hidden lg_pro:block">
            <Link to="/movies">Movies</Link>
          </li>
          <li className=" hidden lg_pro:block">
            <Link to="/series">Series</Link>
          </li>
          <li className=" hidden lg_pro:block">
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li className=" hidden lg_pro:block">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="lg:col-span-4 bg-white p-3 shadow rounded-lg"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div className="mb-4 h-[auto] w-full flex justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={`${title} Poster`}
            className="object-cover object-center max-w-full max-h-[400px] h-fit lg_pro:w-fit w-full rounded-md"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <div className="flex justify-between text-center lg_pro:mx-4">
          <p className="text-sm text-gray-600 mb-2 font-bold">
            Runtime: {runtime} minutes
          </p>
          <p className="text-sm text-gray-600 mb-2 font-bold">{releaseDate}</p>
        </div>
        <p className="text-sm text-gray-600 mb-2 font-bold lg_pro:mx-4">
          Rating: {voteAverage}
        </p>
        <p className="text-justify font-bold lg_pro:mx-4">{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
