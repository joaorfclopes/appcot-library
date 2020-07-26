import React from "react";
import { Tab, Nav, Col, Row } from "react-bootstrap";

/* Components */
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import Button from "./components/Button";
import Title from "./components/Title";

/* Sample Assets */
import logo from "./assets/svg/logo.svg";
import lettering from "./assets/svg/lettering.svg";
import hamburger from "./assets/svg/hamburger.svg";
import gif from "./assets/gif/video.gif";
import mp4 from "./assets/mp4/video.mp4";

function App() {
  const navbarOptions = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];

  const videoBackgroundTexts = {
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    text2: "Sed non congue turpis, sed semper justo",
  };

  return (
    <div className="App">
      <Tab.Container id="left-tabs-example" defaultActiveKey="0">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="0">Navbar</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="1">Video Background</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Button</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">Title</Nav.Link>
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
              <Tab.Pane eventKey="1">
                <VideoBackground
                  gif={gif}
                  mp4={mp4}
                  text1={videoBackgroundTexts.text1}
                  text2={videoBackgroundTexts.text2}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <Button text="Primary" variant="primary" />
                <Button text="Secondary" variant="secondary" />
                <Button text="Success" variant="success" />
                <Button text="Warning" variant="warning" />
                <Button text="Danger" variant="danger" />
                <Button text="Info" variant="info" />
                <Button text="Light" variant="light" />
                <Button text="Dark" variant="dark" />
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <Title text="Lorem Ipsum" theme="light" />
                <Title text="Lorem Ipsum" theme="dark" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default App;
