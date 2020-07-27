import React from "react";
import { Tab, Nav, Col, Row } from "react-bootstrap";

/* Components */
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import Button from "./components/Button";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Text from "./components/Text";

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

  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non congue turpis, sed semper justo. Etiam pulvinar, mauris nec malesuada sollicitudin, est ipsum condimentum velit, ac ultricies nisi nunc nec diam. Nam vel ornare nunc, non viverra quam. Phasellus lacus metus, elementum nec elit at, semper tempus odio. Phasellus dictum blandit erat non posuere. Sed eu imperdiet lorem. Suspendisse malesuada nunc quis facilisis suscipit. Aenean consectetur tellus risus, sed blandit erat efficitur et. Donec sit amet diam sem. Nulla vel varius est. Phasellus at accumsan risus. Etiam at mattis nunc, vitae fringilla ligula. Praesent a convallis purus, ut lobortis orci. Integer mollis dignissim mi, eget molestie nibh suscipit nec.";

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
              <Nav.Item>
                <Nav.Link eventKey="4">Subtitle</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5">Text</Nav.Link>
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
                <Title text="Lorem Ipsum" theme="dark" />
                <Title text="Lorem Ipsum" theme="light" />
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <Subtitle text="Lorem Ipsum" theme="dark" />
                <Subtitle text="Lorem Ipsum" theme="light" />
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <Text text={paragraph} theme="dark" />
                <Text text={paragraph} theme="light" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default App;
