import React from "react";
import $ from "jquery";
import "./sideBySide.css";

export default class SideBySide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: true,
      isMobile: false,
    };
  }

  resize = () => {
    const screenWidth = $(window).width();
    if (screenWidth >= 800) {
      this.setState({ isDesktop: true, isMobile: false });
    } else {
      this.setState({ isDesktop: false, isMobile: true });
    }
  };

  componentDidMount = () => {
    this.resize();
    window.addEventListener("resize", this.resize);
  };

  componentWillUnmount = () => {
    this.resize();
    window.removeEventListener("resize", this.resize);
  };

  render = () => {
    return (
      <div className="side-by-side">
        {!this.props.inverted ? (
          <React.Fragment>
            <div className="side-by-side-text">{this.props.text}</div>
            <div
              className="side-by-side-img"
              style={{ backgroundImage: `url(${this.props.img})` }}
            ></div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {!this.state.isMobile ? (
              <React.Fragment>
                <div
                  className="side-by-side-img"
                  style={{ backgroundImage: `url(${this.props.img})` }}
                ></div>
                <div className="side-by-side-text">{this.props.text}</div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="side-by-side-text">{this.props.text}</div>
                <div
                  className="side-by-side-img"
                  style={{ backgroundImage: `url(${this.props.img})` }}
                ></div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    );
  };
}
