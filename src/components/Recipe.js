import React, { useState, useEffect } from "react";

import { fetchAPI, parseIngredients } from "../config/utils";

import Related from "./Related";

function Recipe({ location, match }) {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState({});

  const idMeal = match.params.id;

  const { strCategory } = location.state;
  const getRelated = async () => {
    const data = await fetchAPI(`filter.php?i=${strCategory}`);

    setMeals(data.meals !== null ? data.meals.reverse().slice(0, 6) : []);
  };

  const getRecipe = async () => {
    const data = await fetchAPI(`lookup.php?i=${idMeal}`);

    setMeal(data.meals[0]);
    console.log(data.meals[0]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(window);
  }, []);

  useEffect(() => {
    getRecipe(meals);
    getRelated();
  }, [idMeal]);

  const object = parseIngredients(meal);

  return (
    <div className="Recipe">
      {meal.hasOwnProperty("idMeal") ? (
        <>
          <div className="words">
            <div className="Ingredients">
              <div className="Title">
                <h1>{meal.strMeal}</h1>
              </div>
              <div className="Text">
                <h2>Ingredients</h2>
                <div className="Ingredients-list">
                  {object.ingredients.map((ingredient, index) => (
                    <p
                      key={index}
                    >{`${object.measures[index]}: ${ingredient}`}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="Instructions">
              <h2>Instructions</h2>
              <div className="Instructions-text">
                <ol>
                  {meal.strInstructions.split(".").map(line => {
                    if (line !== "") {
                      return <li>{line}</li>;
                    } else {
                      return <></>;
                    }
                  })}
                </ol>
              </div>
            </div>
          </div>
          <img className="Image" src={meal.strMealThumb} alt="" />
          <div className="related">
            <p className="check">Check out other recipes with {strCategory}</p>
            <Related meals={meals} strCategory={strCategory} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Recipe;
