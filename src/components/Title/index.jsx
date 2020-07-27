import React from "react";
import "./title.css";

export default class Title extends React.Component {
  render = () => {
    return (
      <p
        className={`title ${this.props.theme}`}
        style={{ textDecorationColor: this.props.overlineColor }}
      >
        {this.props.text}
      </p>
    );
  };
}
