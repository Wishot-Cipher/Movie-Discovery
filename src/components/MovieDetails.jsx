import React from "react";
import play from "../assets/play.png";
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
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://image.tmdb.org/t/p/w1280/${posterPath}')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-2">
      {/* Sidebar */}
      <div className="lg:col-span-1 bg-gray-200 p-2 h-auto lg:h-screen shadow-lg">
        <img
          src={logo1}
          className="object-cover max-w-[55%] h-auto lg:mb-24 mb-4"
          alt=""
        />
        <ul className="text-left space-y-8 flex-col mb-8">
          <li className="text-center font-bold">
            <Link
              to="/"
              className="text-white text-md bg-gray-700 px-4 py-2 my-4 rounded-lg shadow-xl block"
            >
              Back To Home
            </Link>
          </li>
          <li className="hidden lg_pro:block">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="hidden lg_pro:block">
            <Link to="/series">Series</Link>
          </li>
          <li className="hidden lg_pro:block">
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li className="hidden lg_pro:block">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="lg:col-span-4 bg-white p-3 shadow rounded-lg relative" // Added relative positioning
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div style={backgroundStyle} className="relative">
          {" "}
          {/* Added relative positioning */}
          <Link to={"/"}>
            <div className="flex items-center justify-center h-full text-center text-white">
              <img
                src={play}
                className="bg-white bg-opacity-40 rounded-full p-2 object-cover max-w-[18%] mx-2 cursor-pointer"
                alt=""
              />
              <h1 className="test-2xl lg_pro:text-3xl font-extrabold">
                Watch Trailer
              </h1>
            </div>
          </Link>
        </div>

        <h2 className="text-3xl font-extrabold my-3 mb-6 text-center text-[#BE123C] text-shadow">
          {title}
        </h2>

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
