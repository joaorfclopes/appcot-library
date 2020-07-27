import React from "react";
import $ from "jquery";
import Style from "style-it";
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
                <Style key={option}>
                  {`
                    .option {
                      position: relative;
                      overflow: hidden;
                      background: linear-gradient(to right, ${this.props.optionColor}, ${this.props.optionColor} 50%, black 50%);
                      background-clip: text;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                      background-size: 200% 100%;
                      background-position: 100%;
                      transition: background-position 300ms ease;
                      line-height: normal;
                    }
                    
                    .option:hover,
                    .option:active {
                      cursor: pointer;
                      background-position: 0 100%;
                    }
                  `}
                  <span className="option" key={option}>
                    {option}
                  </span>
                </Style>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
}
