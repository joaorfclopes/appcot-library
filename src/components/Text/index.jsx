import React from "react";
import "./text.css";

export default class Text extends React.Component {
  render = () => {
    return <p className={`text ${this.props.theme}`}>{this.props.text}</p>;
  };
}
