import React from "react";
import "./fixedBackground.css";

export default class FixedBackground extends React.Component {
  render = () => {
    return <div className="fixed-background">{this.props.content}</div>;
  };
}
