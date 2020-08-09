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

  scrollToTop = (el) => {
    try {
      $("html, body").animate(
        {
          scrollTop: $(`#${el}`).offset().top - 70,
        },
        "slow",
        "swing"
      );
      window.location.hash = el;
    } catch {}
  };

  scrollToSection = () => {
    $(document).ready(function () {
      $("a").on("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          try {
            $("html, body").animate(
              {
                scrollTop: $(hash).offset().top - 70,
              },
              "slow",
              "swing"
            );
            window.location.hash = hash;
          } catch {}
        }
      });
    });
  };

  formatString = (str) => {
    if (str.indexOf(" ") >= 0) {
      str = str.replace(/\s/g, "");
    }
    if (str.indexOf("'") >= 0) {
      str = str.replace("'", "");
    }
    if (str.indexOf("ç") >= 0) {
      str = str.replace("ç", "c");
    }
    return str.toLowerCase();
  };

  render = () => {
    const options = this.props.options || [""];

    this.scrollToSection();

    return (
      <header className="navbar-container">
        <div className="logo-container">
          <span>
            <img
              className="logo"
              src={this.props.logo}
              alt="logo"
              onClick={() => this.scrollToTop(options[0])}
            />
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
                    .option:hover,
                    .option:active {
                      color: ${this.props.optionColor};
                      text-decoration: none;
                      cursor: pointer;
                      background-position: 0 100%;
                      transition: 0.4s;
                    }
                  `}
                  <a
                    href={"#" + this.formatString(option)}
                    className="option"
                    key={option}
                    onClick={this.closeMenu}
                  >
                    {option}
                  </a>
                </Style>
              ))}
            </div>
          </div>
        </div>
      </header>
    );
  };
}
