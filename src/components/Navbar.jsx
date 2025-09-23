import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/hamburger.svg";

const Navbar = ({ userProfileData, isLoggedIn, handleLogout }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [userDetailMenu, setUserDetailMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleUserDetailMenu = () => {
    setUserDetailMenu(!userDetailMenu);
  };

  return (
    <nav className="bg-black flex justify-between items-center px-16 py-4 max-[650px]:px-8">
      <div>
        <img src={Logo} alt="logo" className="h-16" />
      </div>
      <ul className="flex justify-center items-center space-x-8 text-white font-semibold max-[750px]:hidden">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="flex justify-center items-center space-x-4">
        {!isLoggedIn ? (
          <li>
            <div>
              <Link
                to="/login"
                className="text-white border py-3 px-4 rounded-xl font-semibold transition-colors duration-300 hover:text-black hover:bg-white"
              >
                Login
              </Link>
            </div>
          </li>
        ) : (
          <li>
            <div>
              <img
                src={userProfileData.imageUrl}
                alt={userProfileData.name}
                className="rounded-full h-16 cursor-pointer object-cover w-16"
                onClick={toggleUserDetailMenu}
                aria-label="User Profile"
              />
            </div>
          </li>
        )}
        <li className="min-[750px]:hidden">
          <img
            src={Hamburger}
            alt="hamburger"
            className="h-12 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          />
        </li>
      </ul>
      {showMenu && (
        <div className="bg-gray-200 text-black absolute top-24 left-0 right-0 min-[750px]:hidden z-50">
          <ul className="py-4 px-16 space-y-8 font-semibold max-[650px]:px-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}

      {userDetailMenu && isLoggedIn && (
        <div className="bg-black text-white absolute top-[5.8rem] right-2 z-50 rounded-lg">
          <ul className="py-4 px-8 space-y-8 font-semibold max-[650px]:px-8">
            <li>{userProfileData.name}</li>
            <li>{userProfileData.email}</li>
            <li>
              <div>
                <button
                  onClick={handleLogout}
                  className="text-white border py-3 px-4 rounded-xl font-semibold transition-colors duration-300 hover:text-black hover:bg-white"
                >
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
