import React from "react";
import { Tab, Nav, Col, Row, CardDeck } from "react-bootstrap";

/* Components */
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Text from "./components/Text";
import Card from "./components/Card";
import VideoBackground from "./components/VideoBackground";
import FixedBackground from "./components/FixedBackground";

/* Sample Assets */
import logo from "./assets/svg/logo.svg";
import lettering from "./assets/svg/lettering.svg";
import hamburger from "./assets/svg/hamburger.svg";
import gif from "./assets/gif/video.gif";
import mp4 from "./assets/mp4/video.mp4";
import img1 from "./assets/jpg/img1.jpg";
import img2 from "./assets/jpg/img2.jpg";
import img3 from "./assets/jpg/img3.jpg";

function App() {
  const navbarOptions = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];

  const words = "Lorem Ipsum";

  const phrase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

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
                <Nav.Link eventKey="1">Button</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Title</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">Subtitle</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">Text</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5">Card</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="6">Video Background</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="7">Fixed Background</Nav.Link>
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
                  optionColor="#F07F00"
                />
                <br />
                <Navbar
                  logo={logo}
                  noLettering
                  hamburger={hamburger}
                  options={navbarOptions}
                  optionColor="#C1D910"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="1">
                <Button text="Primary" variant="primary" />
                <Button text="Secondary" variant="secondary" />
                <Button text="Success" variant="success" />
                <Button text="Warning" variant="warning" />
                <Button text="Danger" variant="danger" />
                <Button text="Info" variant="info" />
                <Button text="Light" variant="light" />
                <Button text="Dark" variant="dark" />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <Title text={words} theme="dark" overlineColor="#F07F00" />
                <Title text={words} theme="light" overlineColor="#C1D910" />
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <Subtitle text={words} theme="dark" />
                <Subtitle text={words} theme="light" />
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <Text text={paragraph} theme="dark" />
                <Text text={paragraph} theme="light" />
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <Card bg={img1} title={words} text={phrase} />
                <br />
                <CardDeck>
                  <Card bg={img1} title={words} text={phrase} />
                  <Card bg={img2} title={words} text={phrase} />
                  <Card bg={img3} title={words} text={phrase} />
                </CardDeck>
              </Tab.Pane>
              <Tab.Pane eventKey="6">
                <VideoBackground
                  gif={gif}
                  mp4={mp4}
                  content={[
                    <Subtitle text={words} theme="light" />,
                    <Subtitle text={phrase} theme="light" />,
                    <Button text="Warning" variant="warning" />,
                  ]}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="7">
                <FixedBackground
                  content={[
                    <Title
                      text={words}
                      theme="light"
                      overlineColor="#F07F00"
                    />,
                    <Subtitle text={words} theme="light" />,
                    <Text text={paragraph} theme="light" />,
                    <Subtitle text={words} theme="dark" />,
                    <Text text={paragraph} theme="dark" />,
                    <Subtitle text={words} theme="light" />,
                    <Text text={paragraph} theme="light" />,
                  ]}
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
