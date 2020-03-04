import React, { useState, useEffect } from "react";

import { fetchAPI } from "../config/utils";

import Suggestions from "../components/Suggestions";

function Category({ strCategory, getRecipe }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getRecipe(meals);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  getRecipe = async () => {
    const data = await fetchAPI(`filter.php?i=${strCategory}`);

    setMeals({
      meals: data.meals !== null ? data.meals.slice(0, 9) : [],
      isLoading: false
    });
  };

  return (
    <>
      <Suggestions meals={meals} strCategory={strCategory} />
    </>
  );
}

export default Category;
