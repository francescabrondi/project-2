import React from "react";

import { Link } from "react-router-dom";

const Suggestions = ({ meals, strCategory }) => {
  return (
    <div className="Suggestions">
      <div className="container">
        <div className="grid">
          {meals.map(meal => (
            <div className="grid-item" key={meal.idMeal}>
              <Link
                to={{
                  pathname: `/recipe/${meal.idMeal}`,
                  state: {
                    strCategory
                  }
                }}
                activeClassName="active"
              >
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <div className="Box">
                  <p className="name">{meal.strMeal}</p>
                  <div className="line"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
