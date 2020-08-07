import React from "react";
import $ from "jquery";
import "./footer.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import appcot from "../../assets/svg/appcot.svg";
import instagram from "../../assets/svg/instagram.svg";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import linkedin from "../../assets/svg/linkedin.svg";

export default class Footer extends React.Component {
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

  notify = () => {
    NotificationManager.success("Successfully Copied!", "", 2000);
  };

  render = () => {
    const goToOptions = this.props.goToOptions || [""];
    const contactUsOptions = this.props.contactUsOptions || [""];

    this.scrollToSection();

    return (
      <footer
        className="footer"
        style={{ backgroundColor: this.props.bgColor }}
      >
        <div className="footer-wrapper">
          <div className="widget">
            <h5 className="widget-title">Go To</h5>
            <ul className="widget-list">
              {goToOptions.map((option) => (
                <li className="widget-li">
                  <a
                    href={"#" + this.formatString(option)}
                    className="widget-item"
                  >
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="widget">
            <h5 className="widget-title">Contact Us</h5>
            <ul className="widget-list">
              {contactUsOptions.map((option) => (
                <li className="widget-li">
                  <CopyToClipboard text={option}>
                    <span className="widget-item" onClick={this.notify}>
                      {option}
                    </span>
                  </CopyToClipboard>
                </li>
              ))}
            </ul>
          </div>
          <div className="widget">
            <h5 className="widget-title">Social Media</h5>
            <ul className="widget-list">
              {this.props.instagram && (
                <li className="widget-li inline">
                  <a
                    href={this.props.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="media-icon"
                      src={instagram}
                      alt="instagram"
                    />
                  </a>
                </li>
              )}
              {this.props.facebook && (
                <li className="widget-li inline">
                  <a
                    href={this.props.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="media-icon" src={facebook} alt="facebook" />
                  </a>
                </li>
              )}
              {this.props.twitter && (
                <li className="widget-li inline">
                  <a
                    href={this.props.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="media-icon" src={twitter} alt="twitter" />
                  </a>
                </li>
              )}
              {this.props.linkedin && (
                <li className="widget-li inline">
                  <a
                    href={this.props.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="media-icon" src={linkedin} alt="linkedin" />
                  </a>
                </li>
              )}
            </ul>
          </div>
          <p className="signature">
            Powered by <img className="signature-img" src={appcot} alt="logo" />{" "}
            Appcot
          </p>
        </div>
        <NotificationContainer />
      </footer>
    );
  };
}
