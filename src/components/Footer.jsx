import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4 mt-4">
      <div className="container mx-auto text-center">
        <p> <FaFacebook /> </p>
        <p className="text-lg font-bold">Copyright @Wishot 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
