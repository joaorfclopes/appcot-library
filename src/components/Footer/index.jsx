import React from "react";
import "./footer.css";

/* Assets */
import logo from "../../assets/svg/logo.svg";

export default class Footer extends React.Component {
  render = () => {
    return (
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="widget">
            <h5 className="widget-title">Go To</h5>
            <ul className="widget-list">
              <li>
                <span className="widget-item">lorem</span>
              </li>
              <li>
                <span className="widget-item">ipsum</span>
              </li>
              <li>
                <span className="widget-item">dolor</span>
              </li>
              <li>
                <span className="widget-item">sit</span>
              </li>
            </ul>
          </div>
          <div className="widget">
            <h5 className="widget-title">Contact Us</h5>
            <ul className="widget-list">
              <li>
                <span className="widget-item">lorem</span>
              </li>
            </ul>
          </div>
          <div className="widget">
            <h5 className="widget-title">Social Media</h5>
            <ul className="widget-list">
              <li>
                <span className="widget-item">lorem</span>
              </li>
              <li>
                <span className="widget-item">ipsum</span>
              </li>
              <li>
                <span className="widget-item">dolor</span>
              </li>
            </ul>
          </div>
          <p className="signature">
            Powered by <img className="signature-img" src={logo} alt="logo" />{" "}
            Appcot
          </p>
        </div>
      </footer>
    );
  };
}
