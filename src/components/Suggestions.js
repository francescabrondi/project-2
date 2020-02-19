import React from "react";

import { NavLink } from "react-router-dom";

import { fetchAPI } from "../config/utils";

class Suggestions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strCategory: this.props.match.params.category,
      meals: [],
      isLoading: true
    };
  }
  componentDidMount() {
    this.getRecipe();
  }

  render() {
    return (
      <div className="Suggestions">
        <div className="container">
          {!this.state.isLoading && this.state.meals.length !== 0 ? (
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
                      <p className="name">{meal.strMeal}</p>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          ) : (
            <div className="error">
              <p className="ops">OOOPS!</p>
              <p className="number">404</p>
              <p className="notfound">page&ensp;not&ensp;found</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  getRecipe = async () => {
    const data = await fetchAPI(`filter.php?i=${this.state.strCategory}`);

    this.setState({
      meals: data.meals !== null ? data.meals : [],
      isLoading: false
    });
  };

  // getSuggestions = async () => {
  //   const recipe = await fetchAPI(
  //     `https://www.themealdb.com/api/json/v1/1/lookup.php?${this.state.categories.strCategory}`
  //   );

  //   this.setState({
  //     meals: recipe.meals
  //   });
  // };
}

export default Suggestions;
