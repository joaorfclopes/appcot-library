import React from "react";
import { Accordion as BootstrapAccordion, Card, Button } from "react-bootstrap";
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
            <BootstrapAccordion.Toggle
              onClick={this.toggle}
              className="accordion-toggle collapsible-link"
              aria-expanded={this.state.expanded}
              as={Button}
              variant="link"
              eventKey="0"
            >
              <div className="accordion-title">Click Me!</div>
            </BootstrapAccordion.Toggle>
          </Card.Header>
          <BootstrapAccordion.Collapse
            eventKey="0"
            className="accordion-collapse"
          >
            <Card.Body className="accordion-body">
              Hello! I'm the body
            </Card.Body>
          </BootstrapAccordion.Collapse>
        </Card>
      </BootstrapAccordion>
    );
  };
}
