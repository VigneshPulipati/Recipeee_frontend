import React, { useState } from "react";
import recipeContext from "./recipeContext";

const State = (props) => {
  const host = import.meta.env.VITE_BACKEND_URL;
  const authToken = localStorage.getItem("token");

  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`${host}/api/recipes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });
      const json = await response.json();
      setRecipes(json);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const addRecipe = async (recipeData) => {
    try {
      const response = await fetch(`${host}/api/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(recipeData),
      });

      const recipe = await response.json();
      setRecipes([...recipes, recipe]);
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      await fetch(`${host}/api/recipes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      const newRecipes = recipes.filter((recipe) => recipe.id !== id);
      setRecipes(newRecipes);
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const editRecipe = async (recipeId, recipeData) => {
    try {
      await fetch(`${host}/api/recipes/${recipeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(recipeData),
      });

      const editedRecipes = recipes.map((recipe) =>
        recipe.id === recipeId
          ? {
              ...recipe,
              ...recipeData,
            }
          : recipe
      );
      setRecipes(editedRecipes);
    } catch (error) {
      console.error("Error editing recipe:", error);
    }
  };

  return (
    <recipeContext.Provider
      value={{ recipes, addRecipe, deleteRecipe, editRecipe, fetchRecipes }}
    >
      {props.children}
    </recipeContext.Provider>
  );
};

export default State;
