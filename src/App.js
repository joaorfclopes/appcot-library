import React from "react";
import { Tab, Nav, Col, Row, CardDeck } from "react-bootstrap";

/* Components */
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Text from "./components/Text";
import Card from "./components/Card";
import BackgroundVideo from "./components/BackgroundVideo";
import BackgroundImg from "./components/BackgroundImg";
import SideBySide from "./components/SideBySide";
import Accordion from "./components/Accordion";
import CenteredContent from "./components/CenteredContent";
import Footer from "./components/Footer";

/* Sample Assets */
import logo from "./assets/svg/appcot.svg";
import lettering from "./assets/svg/lettering.svg";
import hamburger from "./assets/svg/hamburger.svg";
import gif from "./assets/gif/video.gif";
import mp4 from "./assets/mp4/video.mp4";
import img1 from "./assets/jpg/img1.jpg";
import img2 from "./assets/jpg/img2.jpg";
import img3 from "./assets/jpg/img3.jpg";
import background from "./assets/jpg/background.jpg";

function App() {
  const navbarOptions = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];

  const words = "Lorem Ipsum";

  const phrase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non congue turpis, sed semper justo. Etiam pulvinar, mauris nec malesuada sollicitudin, est ipsum condimentum velit, ac ultricies nisi nunc nec diam. Nam vel ornare nunc, non viverra quam. Phasellus lacus metus, elementum nec elit at, semper tempus odio. Phasellus dictum blandit erat non posuere. Sed eu imperdiet lorem. Suspendisse malesuada nunc quis facilisis suscipit. Aenean consectetur tellus risus, sed blandit erat efficitur et. Donec sit amet diam sem. Nulla vel varius est. Phasellus at accumsan risus. Etiam at mattis nunc, vitae fringilla ligula. Praesent a convallis purus, ut lobortis orci. Integer mollis dignissim mi, eget molestie nibh suscipit nec.";

  const mainColor = "#F07F00";
  const secondaryColor = "#C1D910";

  const mailingList = ["example@gmail.com"];

  const mobileList = ["(+351) 912 345 678", "(+351) 987 654 321"];

  const action = () => {
    alert("This is an action!");
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
                <Nav.Link eventKey="6">Background Video</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="7">Background Image</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="8">Side By Side</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="9">Accordion</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="10">Centered Content</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="11">Footer</Nav.Link>
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
                  optionHoverColor={mainColor}
                />
                <br />
                <Navbar
                  logo={logo}
                  noLettering
                  hamburger={hamburger}
                  options={navbarOptions}
                  optionHoverColor={secondaryColor}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="1">
                <Button text="Primary" variant="primary" action={action} />
                <Button text="Secondary" variant="secondary" />
                <Button text="Success" variant="success" />
                <Button text="Warning" variant="warning" />
                <Button text="Danger" variant="danger" />
                <Button text="Info" variant="info" />
                <Button text="Light" variant="light" />
                <Button text="Dark" variant="dark" />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <Title text={words} overlineColor={mainColor} />
                <Title dark text={words} overlineColor={secondaryColor} />
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <Subtitle text={words} />
                <Subtitle dark text={words} />
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <Text text={paragraph} />
                <Text dark text={paragraph} />
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
                <BackgroundVideo
                  gif={gif}
                  mp4={mp4}
                  content={
                    <CenteredContent
                      content={[
                        <Subtitle key="1" dark text={words} />,
                        <Subtitle key="2" dark text={phrase} />,
                        <Button key="3" text="Warning" variant="warning" />,
                      ]}
                    />
                  }
                />
              </Tab.Pane>
              <Tab.Pane eventKey="7">
                <BackgroundImg
                  bgImage={background}
                  content={[
                    <Title
                      key="1"
                      dark
                      text={words}
                      overlineColor={mainColor}
                    />,
                    <Subtitle key="2" dark text={words} />,
                    <Text key="3" dark text={paragraph} />,
                    <Subtitle key="4" text={words} />,
                    <Text key="5" text={paragraph} />,
                    <Subtitle key="6" dark text={words} />,
                    <Text key="7" dark text={paragraph} />,
                  ]}
                />
                <br />
                <BackgroundImg
                  bgImage={background}
                  fixedBackground
                  content={[
                    <Title
                      key="1"
                      dark
                      text={words}
                      overlineColor={mainColor}
                    />,
                    <Subtitle key="2" dark text={words} />,
                    <Text key="3" dark text={paragraph} />,
                    <Subtitle key="4" text={words} />,
                    <Text key="5" text={paragraph} />,
                    <Subtitle key="6" dark text={words} />,
                    <Text key="7" dark text={paragraph} />,
                  ]}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="8">
                <SideBySide
                  text={[
                    <Subtitle key="1" text={words} />,
                    <Text key="2" text={paragraph} />,
                    <Text key="3" text={paragraph} />,
                  ]}
                  img={img1}
                />
                <br />
                <SideBySide
                  inverted
                  text={[
                    <Subtitle key="1" text={words} />,
                    <Text key="2" text={paragraph} />,
                    <Text key="3" text={paragraph} />,
                  ]}
                  img={img1}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="9">
                <Accordion
                  title={words}
                  body={paragraph}
                  hoverColor={mainColor}
                />
                <Accordion
                  title={words}
                  body={paragraph}
                  hoverColor={secondaryColor}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="10">
                <CenteredContent
                  content={[
                    <Subtitle key="1" text={words} />,
                    <Subtitle key="2" text={phrase} />,
                    <Button key="3" text="Warning" variant="warning" />,
                  ]}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="11">
                <Footer
                  goToOptions={navbarOptions}
                  mailingList={mailingList}
                  mobileList={mobileList}
                  instagram="https://www.instagram.com/"
                  facebook="https://www.facebook.com/"
                  twitter="https://twitter.com/home"
                  linkedin="https://www.linkedin.com/"
                />
                <br />
                <Footer
                  dark
                  goToOptions={navbarOptions}
                  mailingList={mailingList}
                  mobileList={mobileList}
                  instagram="https://www.instagram.com/"
                  facebook="https://www.facebook.com/"
                  twitter="https://twitter.com/home"
                  linkedin="https://www.linkedin.com/"
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
