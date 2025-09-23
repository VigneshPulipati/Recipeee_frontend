import React from "react";
import { IoPersonCircleSharp, IoTimeOutline } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ recipes }) => {
  return (
    <div className="max-w-screen-lg mx-auto grid gap-8 max-[650px]:grid-cols-1 max-[900px]:grid-cols-2 grid-cols-3">
      {recipes.map((recipe, index) => (
        <div key={index} className="text-center">
          <img
            src={recipe.imageUrl || ""}
            alt={recipe.name || "Recipe"}
            className="w-48 h-48 mx-auto rounded-full object-cover"
          />
          <p className="text-2xl py-4 font-satisfy">{recipe.name}</p>
          <p>
            <FaInfoCircle className="inline-block align-middle" />{" "}
            <span className="align-middle">{recipe.type}</span>
          </p>
          <p>
            <IoTimeOutline className="inline-block align-middle" />{" "}
            <span className="align-middle">{recipe.duration}</span>
          </p>
          <p>
            <IoPersonCircleSharp className="inline-block align-middle" />{" "}
            <span className="align-middle">{recipe.user?.name || "Unknown"}</span>
          </p>
          <div className="py-8">
            <Link
              to="/recipe-details"
              state={{
                recipe,
              }}
              className="px-8 py-3 border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white font-semibold"
            >
              View Full Recipe
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
