import React, { useState, useEffect, useContext } from "react";
import Cards from "../components/Cards";
import Modal from "../components/Modal";
import recipeContext from "../context/recipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Recipes = ({ userProfileData }) => {
  // Access recipes and fetchRecipes function from context
  const { recipes, fetchRecipes } = useContext(recipeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  let navigate=useNavigate();

  useEffect(() => {
    if (userProfileData.email.length === 0) {
      toast.info("Please login to continue.");
      navigate("/");
    } else {
      fetchRecipes();
    }
  }, [userProfileData, fetchRecipes]); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="m-16">
      <div className="flex justify-around text-6xl text-center mb-16 max-[750px]:text-4xl max-[380px]:text-2xl max-[800px]:flex-col items-center min-[800px]:mb-32">
        <span className="font-satisfy"> Tasty Recipes 😋</span>
        <button
          onClick={openModal}
          className="max-[800px]:mt-12 bg-white hover:bg-cyellow text-cyellow hover:text-white px-3 py-2 border border-cyellow w-44 h-16 text-xl"
        >
          Add new recipe
        </button>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <Cards recipes={recipes} />
    </section>
  );
};

export default Recipes;
