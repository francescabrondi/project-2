import axios from "axios";

export const fetchAPI = async path => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/${path}`
  );

  return response.data;
};

export const parseIngredients = meal => {
  let ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal["strIngredient" + i]) {
      ingredients.push(meal["strIngredient" + i]);
    }
  }
  let measures = [];

  for (let i = 1; i <= 20; i++) {
    if (meal["strMeasure" + i]) {
      measures.push(meal["strMeasure" + i]);
    }
  }
  return { ingredients, measures };
};
