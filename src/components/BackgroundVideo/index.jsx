import React from "react";
import "./backgroundVideo.css";

export default class BackgroundVideo extends React.Component {
  render = () => {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    return (
      <div className="background-video">
        <div className="video-container">
          {iOS ? (
            <React.Fragment>
              <img className="video" src={this.props.gif} alt="video" />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <video autoPlay loop muted playsInline className="video">
                <source src={this.props.mp4} type="video/mp4" />
              </video>
            </React.Fragment>
          )}
          <div className="front-text">
            <div className="video-text">{this.props.content}</div>
          </div>
        </div>
      </div>
    );
  };
}
