import React from "react";
import $ from "jquery";
import "./footer.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import appcot from "../../assets/svg/appcot.svg";

import phoneDark from "../../assets/svg/dark/phone.svg";
import emailDark from "../../assets/svg/dark/email.svg";
import instagramDark from "../../assets/svg/dark/instagram.svg";
import facebookDark from "../../assets/svg/dark/facebook.svg";
import twitterDark from "../../assets/svg/dark/twitter.svg";
import linkedinDark from "../../assets/svg/dark/linkedin.svg";

import phoneLight from "../../assets/svg/light/phone.svg";
import emailLight from "../../assets/svg/light/email.svg";
import instagramLight from "../../assets/svg/light/instagram.svg";
import facebookLight from "../../assets/svg/light/facebook.svg";
import twitterLight from "../../assets/svg/light/twitter.svg";
import linkedinLight from "../../assets/svg/light/linkedin.svg";

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
    NotificationManager.success("Copied to clipboard", "", 2000);
  };

  render = () => {
    const goToOptions = this.props.goToOptions || [""];
    const mailingList = this.props.mailingList || [""];
    const mobileList = this.props.mobileList || [""];

    this.scrollToSection();

    return (
      <footer
        className={`footer ${this.props.dark && "dark"}`}
        style={{ backgroundColor: `${this.props.dark && "#292929"}` }}
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
              {mailingList.map((option) => (
                <li className="widget-li">
                  <a href={`mailto: ${option}`} className="widget-item">
                    <img
                      className="widget-item-img"
                      src={this.props.dark ? emailDark : emailLight}
                      alt="email"
                    />{" "}
                    {option}
                  </a>
                </li>
              ))}
              {mobileList.map((option) => (
                <li className="widget-li">
                  <CopyToClipboard text={option}>
                    <span className="widget-item" onClick={this.notify}>
                      <img
                        className="widget-item-img"
                        src={this.props.dark ? phoneDark : phoneLight}
                        alt="phone"
                      />{" "}
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
                      src={this.props.dark ? instagramDark : instagramLight}
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
                    <img
                      className="media-icon"
                      src={this.props.dark ? facebookDark : facebookLight}
                      alt="facebook"
                    />
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
                    <img
                      className="media-icon"
                      src={this.props.dark ? twitterDark : twitterLight}
                      alt="twitter"
                    />
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
                    <img
                      className="media-icon"
                      src={this.props.dark ? linkedinDark : linkedinLight}
                      alt="linkedin"
                    />
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
