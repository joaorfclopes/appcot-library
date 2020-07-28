import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import "./card.css";

export default class Card extends React.Component {
  render = () => {
    return (
      <BootstrapCard className="appcot-card">
        <div
          className="appcot-card-bg"
          style={{
            backgroundImage: `url(${this.props.bg})`,
          }}
        ></div>
        <BootstrapCard.Body className="appcot-card-body">
          <BootstrapCard.Title className="appcot-card-title">
            {this.props.title}
          </BootstrapCard.Title>
          <BootstrapCard.Text className="appcot-card-text">
            {this.props.text}
          </BootstrapCard.Text>
        </BootstrapCard.Body>
      </BootstrapCard>
    );
  };
}
