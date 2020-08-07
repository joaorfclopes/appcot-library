import React from "react";
import "./subtitle.css";

export default class Subtitle extends React.Component {
  render = () => {
    return (
      <h3 className={`subtitle ${this.props.dark && "dark"}`}>
        {this.props.text}
      </h3>
    );
  };
}
