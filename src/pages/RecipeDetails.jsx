import React, { useState, useContext } from "react";
import { FaCircle } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import recipeContext from "../context/recipeContext";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const RecipeDetailsPage = ({ userProfileData }) => {
  const { state } = useLocation();
  const { deleteRecipe } = useContext(recipeContext);
  let navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalData = {
    heading: "Edit",
    recipeData: state.recipe,
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteRecipe(state.recipe.id);
      setIsLoading(false);
      toast.success("Recipe deleted successfully!");
      navigate("/recipes");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Failed to delete recipe. Please try again later.");
    }
  };

  const isCurrentUserCreator =
    userProfileData.email === state.recipe.user.email;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-center items-center">
            <img
              src={state.recipe.imageUrl}
              alt={state.recipe.name}
              className="w-full h-96 py-4 object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <p className="font-satisfy text-4xl text-center font-semibold py-4 mb-4">
              {state.recipe.name}
            </p>
            <div className="flex justify-between items-center text-xl">
              <div className="flex justify-start items-center text-xl">
                <FaCircle
                  className={`${
                    state.recipe.type === "veg"
                      ? "text-green-500"
                      : "text-[#852b2b]"
                  } text-xl mb-4 mr-3`}
                />
                <h2 className="md:text-2xl font-satisfy font-semibold mb-4">
                  {state.recipe.type}
                </h2>
              </div>
              <div className="flex justify-start items-center text-xl">
                <FiClock className="text-xl mb-[0.9rem] mr-1 text-red-400" />
                <h2 className="text-xl mb-4">{state.recipe.duration}</h2>
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-satisfy font-semibold mb-2">
              Description:
            </h3>
            <p className="text-black mb-4 text-justify">
              {state.recipe.description}
            </p>
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-satisfy font-semibold mb-2">
                Ingredients:
              </h3>
              <pre className="text-black whitespace-pre-wrap text-justify">
                {state.recipe.ingredients}
              </pre>
            </div>
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-satisfy font-semibold mb-2">
                Steps to Make:
              </h3>
              <pre className="text-black whitespace-pre-wrap text-justify">
                {state.recipe.steps}
              </pre>
            </div>
            <div className="mb-6 md:mb-8 flex justify-center items-center gap-4">
              <p className="text-lg md:text-xl font-satisfy font-semibold mb-2">
                Added By:
              </p>
              <p className="text-lg md:text-xl font-satisfy font-semibold mb-2 text-cyellow">
                {state.recipe.user.name}
              </p>
            </div>
            <div className="flex justify-end mt-12 gap-4">
              {isCurrentUserCreator && (
                <>
                  <button
                    onClick={openModal}
                    className="bg-white text-green-500 px-4 py-2 rounded font-semibold border border-green-500 hover:bg-green-500 hover:text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-white text-red-500 px-4 py-2 rounded font-semibold border border-red-500 hover:bg-red-500 hover:text-white"
                  >
                    {isLoading ? <Spinner /> : "Delete"}
                  </button>
                </>
              )}
            </div>
            <Modal
              isOpen={isModalOpen}
              closeModal={closeModal}
              modalData={modalData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
