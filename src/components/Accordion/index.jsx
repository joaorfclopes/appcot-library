import React from "react";
import { Accordion as BootstrapAccordion, Card, Button } from "react-bootstrap";
import Style from "style-it";
import "./accordion.css";

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render = () => {
    return (
      <BootstrapAccordion className="accordion">
        <Card className="accordion-card">
          <Card.Header className="accordion-card-header">
            <Style>
              {`
                .collapsible-link:hover>div {
                  color: ${this.props.hoverColor};
                }
              `}
              <BootstrapAccordion.Toggle
                onClick={this.toggle}
                className="accordion-toggle collapsible-link"
                aria-expanded={this.state.expanded}
                as={Button}
                variant="link"
                eventKey="0"
              >
                <div className="accordion-title">{this.props.title}</div>
              </BootstrapAccordion.Toggle>
            </Style>
          </Card.Header>
          <BootstrapAccordion.Collapse eventKey="0">
            <Card.Body className="accordion-body">{this.props.body}</Card.Body>
          </BootstrapAccordion.Collapse>
        </Card>
      </BootstrapAccordion>
    );
  };
}
