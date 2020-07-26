import React from "react";
import "./title.css";

export default class Title extends React.Component {
  render = () => {
    return <p className={`title ${this.props.theme}`}>{this.props.text}</p>;
  };
}
