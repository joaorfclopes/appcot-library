import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import "./card.css";

export default class Card extends React.Component {
  render = () => {
    return (
      <BootstrapCard className="card">
        <div
          className="card-bg"
          style={{
            backgroundImage: `url(${this.props.bg})`,
          }}
        ></div>
        <BootstrapCard.Body className="card-body">
          <BootstrapCard.Title className="card-title">
            {this.props.title}
          </BootstrapCard.Title>
          <BootstrapCard.Text className="card-text">
            {this.props.text}
          </BootstrapCard.Text>
        </BootstrapCard.Body>
      </BootstrapCard>
    );
  };
}
