import React from "react";
import { Tab, Nav, Col, Row } from "react-bootstrap";

/* Components */
import Navbar from "./components/Navbar";

/* Sample Assets */
import logo from "./assets/svg/logo.svg";
import lettering from "./assets/svg/lettering.svg";
import hamburger from "./assets/svg/hamburger.svg";

function App() {
  const navbarOptions = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];

  return (
    <div className="App">
      <Tab.Container id="left-tabs-example" defaultActiveKey="0">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="0">Navbar</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="0">
                <Navbar
                  logo={logo}
                  lettering={lettering}
                  hamburger={hamburger}
                  options={navbarOptions}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default App;
