import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 mt-20">
      <div className="container mx-auto text-center flex justify-center items-center flex-col">
        <div className="flex space-x-6  lg:space-x-10 mb-2">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-3xl text-black" /></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-3xl" /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-3xl" /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-3xl" /></a>
          <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"><FaGithub className="text-3xl" /></a>
        </div>
        <p className="text-lg font-bold mb-2"> © 2023 MovieBox by Wishot</p>
        <p className="text-sm">All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
