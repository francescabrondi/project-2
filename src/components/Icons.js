import React from "react";


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
                <SVGIcon name="wifi" width={100}
                  onClick={this.handleOnClick} />
              </div>
              <div className="col">
                <SVGIcon name="wifi" width={100}
                  onClick={this.handleOnClick} />
              </div>
              <div className="col">
                <SVGIcon name="wifi" width={100}
                  onClick={this.handleOnClick} />
              </div>
              <div className="col">
                <SVGIcon name="wifi" width={100}
                  onClick={this.handleOnClick} />
              </div>
              <div className="col">
                <SVGIcon name="wifi" width={100}
                  onClick={this.handleOnClick} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <SVGIcon name="wifi" width={100}
                  onClick={this.handleOnClick} />
              </div>
              <div className="col">
                <SVGIcon name="wifi" width={100}
                  onClick={this.handleOnClick} />
              </div>
              <div className="col">
                <SVGIcon name="wifi" width={100}
                  onClick={this.handleOnClick} />
              </div>
              <div className="col">
                <SVGIcon name="wifi" width={100}
                  onClick={this.handleOnClick} />
              </div>
              <div className="col">
                <SVGIcon name="wifi" width={100}
                  onClick={this.handleOnClick} />
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
