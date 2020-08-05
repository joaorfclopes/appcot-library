import React from "react";
import "./centeredContent.css";

export default class CenteredContent extends React.Component {
  render = () => {
    return (
      <div className="centered-content-container">
        <div className="centered-content-wrapper">
          <div className="centered-content">{this.props.content}</div>
        </div>
      </div>
    );
  };
}
