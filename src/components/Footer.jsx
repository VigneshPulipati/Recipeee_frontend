import React from "react";
import { Link } from "react-router-dom";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      {/* grid */}
      <div className="grid grid-cols-3 py-16 px-8 max-[900px]:grid-cols-2 max-[900px]:gap-y-12 max-[450px]:grid-cols-1">
        <div>
          <p className="font-satisfy text-4xl text-white">Quick Links</p>
          <ul className="mt-8 space-y-4 text-lg">
            <li>
              <Link to="/about" className="hover:text-cyellow">
                About
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-cyellow">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyellow">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-satisfy text-4xl text-white">Resources</p>
          <ul className="mt-8 space-y-4 text-lg">
            <li>
              <a href="https://reactjs.org" className="hover:text-cyellow" target="_blank" rel="noopener noreferrer">
                React
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com" className="hover:text-cyellow" target="_blank" rel="noopener noreferrer">
                Tailwind
              </a>
            </li>
            <li>
              <a href="https://spring.io" className="hover:text-cyellow" target="_blank" rel="noopener noreferrer">
                Spring
              </a>
            </li>
            <li>
              <a href="https://www.mysql.com" className="hover:text-cyellow" target="_blank" rel="noopener noreferrer">
                MySQL
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-satisfy text-4xl text-white">Subscribe</p>
          <div className="mt-8">
            <p className="text-lg">
              You can trust us. we only send promo offers,
            </p>
            <div className="mt-12 flex justify-start items-center">
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="footer-email"
                name="footer-email"
                className="p-3 font-semibold w-72 bg-gray-800"
                placeholder="Enter your email..."
                autoComplete="off"
              />
              <button className="bg-cyellow p-4 text-black">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copyright and social links */}
      <div className="flex justify-between items-center px-8 text-lg">
        <p>
          Copyright ©{new Date().getFullYear()} All rights reserved | Made with
          ❤️ by <span className="text-cyellow">Vignesh Pulipati</span>
        </p>
        <ul className="flex space-x-4">
          <li className="bg-gray-800 p-3 hover:bg-cyellow hover:text-black">
            <a href="https://github.com/VigneshPulipati" target="_blank" rel="noopener noreferrer">
              <PiGithubLogoFill />
            </a>  
          </li>
          <li className="bg-gray-800 p-3 hover:bg-cyellow hover:text-black">
            <a href="https://www.linkedin.com/in/vigneshpulipati666" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
