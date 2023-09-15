import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import notFound from "../assets/notFound.jpeg";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center">
      <div className="flex-grow flex flex-col justify-center items-center">
        <Link
          to="/"
          className="absolute top-6 left-10 p-4 font-bold text-white bg-[#BE123C] text-shadow rounded-xl"
        >
          <div className="flex justify-centera text-center">
            <FaArrowLeft  className="mt-1.5 mr-2 font-extrabold"/>
            <p>Go Back To Home</p>
            
          </div>
        </Link>
        <img
          src={notFound}
          alt="Page not found"
          className="max-w-full lg_pro:w-[80%] h-auto"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
