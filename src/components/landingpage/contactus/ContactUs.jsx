import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./index.css";

export default function () {
  return (
    <Container
      fluid
      style={{ margin: "0 auto", backgroundColor: "#d2d4c8" }}
      className="form-container d-flex flex-column"
    >
      <Row className="contact-header text-center">
        <h6 style={{ color: "white" }} className="pt-5">
          
        </h6>
      </Row>
      <Row className="contact-content">
        <Col md={6} className="contact-form">
          <h1 style={{ color: "white" }}>Get in touch with me!</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="pb-3"
            >
              <Form.Label style={{ color: "white" }}>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <button className="styled-button">
              <i className="bi bi-send" aria-hidden="true"></i> Send
            </button>
          </Form>
        </Col>
        <Col md={4} className="contact-info">
          <h3 style={{ color: "white" }}>Say hello :) </h3>
          <p style={{ color: "white" }}>
            I'm actively looking for new opportunities, so please{" "}
            <span style={{ color: "white" }}>reach out</span>! Whether you have a
            <span style={{ color: "white" }}>question</span> or just want to say
            <span style={{ color: "white" }}>hi</span>, I'll try to get back to you!
          </p>
		  <h2 style={{ color: "white" }}>Phone</h2>
          <p style={{ color: "white" }}>413 313 9803</p>
          <h2 style={{ color: "white" }}>
  			<a href="mailto:minhrobin.tran@gmail.com" style={{ color: "white" }}>Email</a>
			</h2>
          <h2 style={{ color: "white" }}>
  			<a href="https://www.linkedin.com/in/robin-tran/" style={{ color: "white" }}>Linkedin</a>
			</h2>
          <h2 style={{ color: "white" }}>
  			<a href="https://github.com/tranrobin" style={{ color: "white" }}>GitHub</a>
			</h2>
        </Col>
      </Row>
      <Row className="contact-footer">
        <p style={{ color: "white" }} className="text-center m-0">
          © 2023 Robin Tran. All rights reserved.
        </p>
      </Row>
    </Container>
  );
}
