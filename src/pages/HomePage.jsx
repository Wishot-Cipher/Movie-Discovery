import React, { useState, useEffect } from "react";
import logo1 from "../assets/logo1.png";
import john from "../assets/john1.png";
import rating from "../assets/rating1.png";
import heroText from "../assets/herotext.png";
import menu from "../assets/menu1.png";
import button from "../assets/button1.png";
import MovieList from "../components/MovieList";
import Spinner from "../components/Spinner";
import SearchBar from "../components/SearchBar";
import axios from "../utils/axios";
import { motion } from "framer-motion";
import "../App.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch top movies
  const fetchTopMovies = async () => {
    try {
      const response = await axios.get("/discover/movie", {
        params: {
          sort_by: "popularity.desc",
          api_key: "14e6772572173a61fc985a3f2094ea07",
        },
      });
      setMovies(response.data.results.slice(0, 10));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopMovies();
  }, []); // Fetch top movies on component mount

  // Function to handle search
  const handleSearch = async (query) => {
    try {
      const response = await axios.get('/search/movie', {
        params: {
          query,
          api_key: '14e6772572173a61fc985a3f2094ea07',
        },
      });
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };
  

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Initial state (hidden and slightly shifted up)
      animate={{ opacity: 1, y: 0 }} // Animate to fully visible and in place
      exit={{ opacity: 0, y: 20 }} // Animate out (hidden and slightly shifted down)
      transition={{ duration: 0.5 }} // Transition duration
      className=" p-0"
    >
      <div className="bg-[url(/src/assets/poster1.png)] lg_pro:h-[100vh] bg-no-repeat h-[50vh] object-cover bg-contain w-[100%]">
        <div className="flex justify-between items-center mx-4 py-2 lg_pro:pt-6 bg-opacity-50">
          {/* Logo */}
          <img src={logo1} className="object-cover max-w-[30%] h-auto" alt="" />

          {/* Search Input */}
          <SearchBar onSearch = {handleSearch} />
          {/* Menu */}
          {/* <div> */}
          <div className="flex items-center lg_pro:mr-8">
            <h1 className="text-white w-[5vw] mr-1 hidden lg_pro:block text-lg font-bold">
              sign up
            </h1>
            <img
              src={menu}
              className="object-cover w-8 lg_pro:w-10 cursor-pointer"
              alt=""
            />
          </div>
          {/* </div> */}
        </div>

        <div className="mx-5 lg_pro:mx-20 mt-2 lg_pro:mt-10 lg_pro:space-y-4 space-y-1.5">
          <img
            src={john}
            className="object-cover max-w-[31%] mt-2 lg_pro:mt-20"
            alt=""
          />
          <img
            src={rating}
            className="object-cover max-w-[31%] -mt-5  lg_pro:mt-2"
            alt=""
          />
          <img
            src={heroText}
            className="object-cover max-w-[40vw] lg_pro:w-[28vw] -mt-3  lg_pro:mt-2"
            alt=""
          />
          <img
            src={button}
            className="object-cover max-w-[20%] -mt-20  lg_pro:mt-2"
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Movie Discovery</h1>
        <h2 className="text-2xl font-bold mb-2">Top 10 Movies</h2>
      </div>
      {loading ? <Spinner /> : <MovieList movies={movies} />}
    </motion.div>
  );
};

export default HomePage;
