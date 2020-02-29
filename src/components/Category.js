import React from "react";

import { fetchAPI } from "../config/utils";

import Suggestions from "../components/Suggestions";

class Category extends React.Component {
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

  status = isLoading => {
    if (isLoading) {
      return (
        <div className="loader">
          <img src="/spinner.gif" alt="" />
        </div>
      );
    } else {
      return (
        <div className="error">
          <p className="ops">OOOPS!</p>
          <p className="number">404</p>
          <p className="notfound">page&ensp;not&ensp;found</p>
          <br />
          <br />
          <p className="failure">
            You're&ensp; a&ensp; failure,&ensp; not&ensp; even &ensp;your
            &ensp;mum &ensp;loves&ensp; you
          </p>
        </div>
      );
    }
  };

  render() {
    return (
      <>
        <Suggestions
          meals={this.state.meals}
          strCategory={this.state.strCategory}
        />
      </>
    );
  }

  getRecipe = async () => {
    const data = await fetchAPI(`filter.php?i=${this.state.strCategory}`);

    this.setState({
      meals: data.meals !== null ? data.meals.slice(0, 9) : [],
      isLoading: false
    });
  };
}

export default Category;
