import React from "react";

import { Link } from "react-router-dom";

const Related = ({ meals, strCategory }) => {
  return (
    <div className="related-container">
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
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Related;
