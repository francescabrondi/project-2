import React from "react";

import { Link } from "react-router-dom";

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

  // render() {
  //   return (
  //     <div className="Suggestions">
  //       <div className="container">
  //         {this.state.meals.length !== 0 ? (
  //           <div className="grid">
  //             {this.state.meals.map(meal => (
  //               <div className="grid-item" key={meal.idMeal}>
  //                 <Link
  //                   to={{
  //                     pathname: `/recipe/${meal.idMeal}`,
  //                     state: {
  //                       strCategory: this.state.strCategory
  //                     }
  //                   }}
  //                   activeClassName="active"
  //                 >
  //                   <img src={meal.strMealThumb} alt={meal.strMeal} />
  //                   <div className="Box">
  //                     <p className="name">{meal.strMeal}</p>
  //                     <div className="line"></div>
  //                   </div>
  //                 </Link>
  //               </div>
  //             ))}
  //           </div>
  //         ) : (
  //           this.status(this.state.isLoading)
  //         )}
  //       </div>
  //     </div>
  //   );
  // }

  getRecipe = async () => {
    const data = await fetchAPI(`filter.php?i=${this.state.strCategory}`);

    this.setState({
      meals: data.meals !== null ? data.meals.slice(0, 9) : [],
      isLoading: false
    });
  };
}

export default Category;
