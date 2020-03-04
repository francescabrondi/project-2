import React from "react";
import randomColor from "randomcolor";
import SVGIcon from "./SVGIcon";
import { fetchAPI } from "../config/utils";

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
                <p
                  className="label-icon"
                  onClick={() => this.handleOnClick("Beef")}
                >
                  Beef
                </p>
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
                <p
                  className="label-icon"
                  onClick={() => this.handleOnClick("Bread")}
                >
                  Bread
                </p>
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
                <p
                  className="label-icon"
                  onClick={() => this.handleOnClick("Broccoli")}
                >
                  Broccoli
                </p>
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
                <p
                  className="label-icon"
                  onClick={() => this.handleOnClick("Chicken")}
                >
                  Chicken
                </p>
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
                <p
                  className="label-icon"
                  onClick={() => this.handleOnClick("Eggs")}
                >
                  Eggs
                </p>
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
                <p
                  className="label-icon"
                  onClick={() => this.handleOnClick("Butter")}
                >
                  Butter
                </p>
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
                <p
                  className="label-icon"
                  onClick={() => this.handleOnClick("Milk")}
                >
                  {" "}
                  Milk
                </p>
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
                <p
                  className="label-icon"
                  onClick={() => this.handleOnClick("Onion")}
                >
                  Onion
                </p>
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
                <p
                  className="label-icon"
                  onClick={() => this.handleOnClick("Potatoes")}
                >
                  Potato
                </p>
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
                <p
                  className="label-icon"
                  onClick={() => this.handleOnClick("Tomato")}
                >
                  Tomato
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Icons;
