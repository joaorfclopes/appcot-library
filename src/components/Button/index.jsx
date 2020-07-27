import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import "./button.css";

export default class Button extends React.Component {
  render = () => {
    return (
      <BootstrapButton className="button" variant={`outline-${this.props.variant}`}>
        {this.props.text}
      </BootstrapButton>
    );
  };
}
