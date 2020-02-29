import React from "react";

import { fetchAPI, parseIngredients } from "../config/utils";

import Related from "./Related";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {
        idMeal: this.props.match.params.id
      },
      strCategory: this.props.location.state.strCategory,
      meals: []
    };

    this.getRecipe();
    this.getRelated();
  }

  getRelated = async () => {
    const data = await fetchAPI(`filter.php?i=${this.state.strCategory}`);

    this.setState({
      meals: data.meals !== null ? data.meals.reverse().slice(0, 6) : []
    });
  };

  render() {
    const object = parseIngredients(this.state.meal);
    return (
      <div className="Recipe">
        <div className="words">
          <div className="Ingredients">
            <div className="Title">
              <h1>{this.state.meal.strMeal}</h1>
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
              {this.state.meal.strInstructions}
            </div>
          </div>
        </div>
        <img className="Image" src={this.state.meal.strMealThumb} alt="" />
        <div className="related">
          <p className="check">
            Check out other recipes with {this.state.strCategory}
          </p>
          <Related
            meals={this.state.meals}
            strCategory={this.state.strCategory}
          />
        </div>
      </div>
    );
  }

  getRecipe = async () => {
    const data = await fetchAPI(`lookup.php?i=${this.state.meal.idMeal}`);

    this.setState({
      meal: data.meals[0]
    });
  };
}

export default Recipe;
