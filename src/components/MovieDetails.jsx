import React from "react";
import play from "../assets/play.png";
import logo1 from "../assets/logo2.png";
import { Link } from "react-router-dom";

const formatDateToUTC = (releaseDate) => {
  const localDate = new Date(releaseDate);
  const utcDate = new Date(
    localDate.getUTCFullYear(),
    localDate.getUTCMonth(),
    localDate.getUTCDate(),
    localDate.getUTCHours(),
    localDate.getUTCMinutes(),
    localDate.getUTCSeconds()
  );
  return utcDate.toISOString().split("T")[0];
};

const MovieDetails = ({
  title,
  releaseDate,
  runtime,
  overview,
  backdropPath,
  voteAverage,
}) => {
  let backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://image.tmdb.org/t/p/original${backdropPath}')`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    height: "65vh",
    maxHeight: "50vh"
  };

  // Adjust background style for mobile
  if (window.innerWidth <= 768) {
    backgroundStyle = {
      ...backgroundStyle,
      height: "50vh",
      maxHeight: "50vh",
    };
  }

  const utcReleaseDate = formatDateToUTC(releaseDate);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-2">
      {/* Sidebar */}
      <div className="lg:col-span-1 bg-gray-200 p-2 h-auto lg:h-screen shadow-lg">
        <img
          src={logo1}
          className="object-cover lg_pro:max-w-[63%] max-w-[44%] h-auto lg:mb-24 mb-4"
          alt=""
        />
        <ul className="text-left space-y-8 flex-col mb-8">
          <li className="text-center font-bold">
            <Link
              to="/"
              className="text-white text-md bg-gray-700 px-4 py-2 my-4 lg_pro:mb-8 rounded-lg shadow-xl block"
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
        <div
          data-testid="movie-poster"
          className="relative rounded-lg"
          style={backgroundStyle}
        >
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

        <h2 data-testid="movie-title" className="text-3xl font-extrabold my-3 mb-6 text-center text-[#BE123C] text-shadow">
          {title}
        </h2>

        <div className="flex justify-between text-center lg_pro:mx-4">
          <p data-testid="movie-runtime" className="text-sm text-gray-600 mb-2 font-bold">
            🕒Runtime: {runtime} minutes
          </p>
          <p data-testid="movie-release-date" className="text-sm text-gray-600 mb-2 font-bold">
            <span className="text-gray-800 mb-2 font-extrabold">📅:</span> {utcReleaseDate}
          </p>
        </div>
        <p data-testid="movie-release-date" className="text-sm text-gray-600 mb-2 font-bold lg_pro:mx-4">
          ⭐Rating: {voteAverage}
        </p>
        <p data-testid="movie-overview" className="text-justify font-bold lg_pro:mx-4">
          <span className="text-gray-800 mb-2 font-bold"> 📺Overview:</span> {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
