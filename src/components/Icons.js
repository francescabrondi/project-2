import React from "react";
import randomColor from "randomcolor";
import SVGIcon from "./SVGIcon";
import { fetchAPI } from "../config/utils";

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleOnClick = e => {
  //   e.target.classList.toggle("active");
  // };

  handleOnClick = async category => {
    const data = await fetchAPI(`filter.php?i=${category}`);

    if (data.meals) {
      this.props.setMeals(data.meals);
    }
  };

  render() {
    return (
      <>
        <div className="Icons">
          <div className="container">
            <div className="row">
              <div className="col">
                <SVGIcon
                  name="Beef"
                  width={100}
                  fill={randomColor({
                    luminosity: "light",
                    hue: "black"
                  })}
                  onClick={() => this.handleOnClick("Beef")}
                />
              </div>
              <div className="col">
                <SVGIcon
                  name="Bread"
                  width={100}
                  fill={randomColor({
                    luminosity: "light",
                    hue: "blue"
                  })}
                  onClick={() => this.handleOnClick("Bread")}
                />
              </div>
              <div className="col">
                <SVGIcon
                  name="Broccolo"
                  width={100}
                  fill={randomColor({
                    luminosity: "light",
                    hue: "blue"
                  })}
                  onClick={() => this.handleOnClick("Broccoli")}
                />
              </div>
              <div className="col">
                <SVGIcon
                  name="Chicken"
                  width={100}
                  fill={randomColor({
                    luminosity: "light",
                    hue: "blue"
                  })}
                  onClick={() => this.handleOnClick("Chicken")}
                />
              </div>
              <div className="col">
                <SVGIcon
                  name="Eggs"
                  width={100}
                  fill={randomColor({
                    luminosity: "light",
                    hue: "blue"
                  })}
                  onClick={() => this.handleOnClick("Eggs")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <SVGIcon
                  name="Butter"
                  width={100}
                  fill={randomColor({
                    luminosity: "light",
                    hue: "blue"
                  })}
                  onClick={() => this.handleOnClick("Butter")}
                />
              </div>
              <div className="col">
                <SVGIcon
                  name="Milk"
                  width={100}
                  fill={randomColor({
                    luminosity: "light",
                    hue: "blue"
                  })}
                  onClick={() => this.handleOnClick("Milk")}
                />
              </div>
              <div className="col">
                <SVGIcon
                  name="Onion"
                  width={100}
                  fill={randomColor({
                    luminosity: "light",
                    hue: "blue"
                  })}
                  onClick={() => this.handleOnClick("Onion")}
                />
              </div>
              <div className="col">
                <SVGIcon
                  name="Potatoes"
                  width={100}
                  fill={randomColor({
                    luminosity: "light",
                    hue: "blue"
                  })}
                  onClick={() => this.handleOnClick("Potatoes")}
                />
              </div>
              <div className="col">
                <SVGIcon
                  name="Tomato"
                  width={100}
                  fill={randomColor({
                    luminosity: "light",
                    hue: "blue"
                  })}
                  onClick={() => this.handleOnClick("Tomato")}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Icons;
