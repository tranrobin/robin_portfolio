import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import pro5Img from "../../../assets/images/profile.png";
import "./header.css";
import CountUp from "react-countup";

export default function PortfHeader() {
  const panelStyle = {
    backgroundColor: "#d2d4c8", // Background color
    borderRadius: "15px",      // Rounded corners
    padding: "20px",           // Padding inside the panel
  };
  const imgStyle = {
    width: "6000px",
    height: "250px",
    borderRadius: "15px", // Rounded corners for the image
    marginTop: "-30px",   // Adjust the negative margin to move the image up
  };

  return (
    <header
      className="py-5 background-image"
      style={{ backgroundColor: "#000000", height: "100%"}}
    >
      <Container>
        <Row className="gx-5 align-items-center justify-content-center">
          {/* Image Column (on the left) */}
          <Col lg={4} xl={3} xxl={2}>
            <div className="text-center mt-3">
              {/* Added mt-3 class for top margin */}
              <img
                src={pro5Img}
                alt="Your Image"
                className="img-fluid"
                style={imgStyle} 
              />
            </div>
          </Col>
          {/* Content Column (on the right) */}
          <Col lg={8} xl={9} xxl={10}>
            <div className="my-5 text-center">
              {/* Rounded corner rectangle */}
              <div style={panelStyle}>
                <h1 className="display-5 fw-bolder mb-2" style={{ color: "#564e58" }}>
                  Hi, I am Minh (Robin) Tran <br />
                  Nice to meet you!
                </h1>
                <p className="lead fw-normal mb-4 fs-4" style={{ color: "#564e58" }}>
                  <strong> Computer Science '25 @ Mount Holyoke College </strong> <br />
                  Aspiring Data Scientist with a passion for Data Science, <br />
                  Machine Learning, NLP, and Software Engineering
                  <br />
                </p>

                {/* Buttons inside the panel */}
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  {/* <Button
                    size="lg"
                    className="px-4 "
                    variant="outline-light"
                    href="#begin"
                  >
                    Let's begin
                  </Button> */}
                  <Button
                    variant="outline-dark"
                    size="lg"
                    className="px-4"
                    href="#about-me-section"
                  >
                    About me
                  </Button>
                  <Button
                    size="lg"
                    className="px-4 me-sm-3"
                    variant="outline-dark"
                    href="https://drive.google.com/file/d/1grkdzG8XMoYIN5g9LbLKqR6EVcZEQjZJ/view?usp=sharing"
                    target="_blank"
                  >
                    My resume
                  </Button>
                </div>
              </div>
              <hr className="divider text-white" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
