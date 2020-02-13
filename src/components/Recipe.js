import React from "react";

import { fetchAPI, parseIngredients } from "../config/utils";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {}
    };

    this.getRecipe();
  }

  render() {
    const object = parseIngredients(this.state.meal);
    return (
      <div className="Recipe">
        <div className="Ingredients">
          <div className="Title">
            <h1>{this.state.meal.strMeal}</h1>
          </div>
          <div className="Text">
            <h2>Ingredients</h2>
            <p className="Ingredients-list">
              {object.ingredients.map((ingredient, index) => (
                <p>
                  {object.measures[index]}: {ingredient}
                </p>
              ))}
            </p>
          </div>
        </div>
        <div className="Instructions">
          <h2>Instructions</h2>
          <p className="Instructions-text">{this.state.meal.strInstructions}</p>
        </div>
        <img className="Image" src={this.state.meal.strMealThumb} alt="" />
      </div>
    );
  }

  getRecipe = async () => {
    const data = await fetchAPI(`lookup.php?i=52772`);

    this.setState({
      meal: data.meals[0]
    });
  };
}

export default Recipe;
