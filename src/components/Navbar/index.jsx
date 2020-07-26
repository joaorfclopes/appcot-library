import React from "react";
import $ from "jquery";
import "./navbar.css";

export default class Navbar extends React.Component {
  openMenu = () => {
    $(".closeMenu").addClass("openCloseMenu");
    $(".options").addClass("openOptions");
  };

  closeMenu = () => {
    $(".closeMenu").removeClass("openCloseMenu");
    $(".options").removeClass("openOptions");
  };

  render = () => {
    const options = this.props.options;

    return (
      <div className="navbarContainer">
        <div className="logoContainer">
          <span>
            <img className="logo" src={this.props.logo} alt="logo" />
            <img
              className="lettering"
              src={this.props.lettering}
              alt="lettering"
            />
          </span>
        </div>
        <div className="optionsContainer">
          <img
            className="hamburger"
            src={this.props.hamburger}
            alt="menu"
            onClick={this.openMenu}
          />
          <div className="options">
            <p className="closeMenu" onClick={this.closeMenu}>
              &#10006;
            </p>
            <div className="menuOptions">
              {options.map((option) => (
                <span className="option" key={option}>
                  {option}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
}
