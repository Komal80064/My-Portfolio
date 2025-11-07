import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1a] text-gray-300 py-1 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">

        {/* Branding / Name */}
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
          Komal Panwar
        </h2>
        <p className="mt-2 text-gray-400">
          MERN Stack Developer | Portfolio Website
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Komal80064"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:scale-125 transition transform duration-300 hover:text-teal-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/komal-panwar-a24754270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:scale-125 transition transform duration-300 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/panwarkomal4?igsh=MXFuYnJzc2hybWR5MA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:scale-125 transition transform duration-300 hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Bottom Text */}
        <p className="mt-3 text-gray-500 text-sm">
          © {new Date().getFullYear()} Komal Panwar • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
