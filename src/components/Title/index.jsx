import React from "react";
import "./title.css";

export default class Title extends React.Component {
  render = () => {
    return (
      <h1
        className={`title ${this.props.dark && "dark"}`}
        style={{ textDecorationColor: this.props.overlineColor }}
      >
        {this.props.text}
      </h1>
    );
  };
}
