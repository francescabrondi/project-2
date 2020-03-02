import React from "react";

import randomColor from "randomcolor";
import SVGIcon from "./SVGIcon";
class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnClick = e => {
    e.target.classList.toggle("active");
  };

  render() {
    return (
      <>
        <div className="Icons">
          <div className="buttons">
            <input className="input" type="text" placeholder="Input Field" />
            <button>Reset</button>
          </div>
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
                  onClick={this.handleOnClick}
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
                  onClick={this.handleOnClick}
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
                  onClick={this.handleOnClick}
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
                  onClick={this.handleOnClick}
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
                  onClick={this.handleOnClick}
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
                  onClick={this.handleOnClick}
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
                  onClick={this.handleOnClick}
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
                  onClick={this.handleOnClick}
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
                  onClick={this.handleOnClick}
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
                  onClick={this.handleOnClick}
                />
              </div>
            </div>
          </div>
          <div className="see-recipes">
            <button className="see">See recipes</button>
          </div>
        </div>
      </>
    );
  }
}

export default Icons;
