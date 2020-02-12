import React from "react";

import { NavLink } from "react-router-dom";

import { fetchAPI } from "../config/utils";

class Suggestions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: []
    };

    this.getRecipe();
  }

  render() {
    return (
      <div className="Suggestions">
        <div className="container">
          <div className="grid">
            {this.state.meals.map(meal => (
              <div className="grid-item" key={meal.idMeal}>
                <NavLink
                  exact
                  to={`/recipe/${meal.idMeal}`}
                  activeClassName="active"
                >
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <div className="Box">
                    <p>{meal.strMeal}</p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  getRecipe = async () => {
    const data = await fetchAPI(`filter.php?i=chicken_breast`);

    this.setState({
      meals: data.meals
    });
  };
}

export default Suggestions;
