import React from "react";
import $ from "jquery";
import "./navbar.css";

export default class Navbar extends React.Component {
  openMenu = () => {
    $(".close-menu").addClass("open-close-menu");
    $(".options").addClass("open-options");
  };

  closeMenu = () => {
    $(".close-menu").removeClass("open-close-menu");
    $(".options").removeClass("open-options");
  };

  render = () => {
    const options = this.props.options;

    return (
      <div className="navbar-container">
        <div className="logo-container">
          <span>
            <img className="logo" src={this.props.logo} alt="logo" />
            {!this.props.noLettering && (
              <img
                className="lettering"
                src={this.props.lettering}
                alt="lettering"
              />
            )}
          </span>
        </div>
        <div className="options-container">
          <img
            className="hamburger"
            src={this.props.hamburger}
            alt="menu"
            onClick={this.openMenu}
          />
          <div className="options">
            <p className="close-menu" onClick={this.closeMenu}>
              &times;
            </p>
            <div className="menu-options">
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
