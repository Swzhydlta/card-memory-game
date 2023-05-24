import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactForm() {
  return (
    <Container className="contact-container mt-3">
      <Row>
        <Col>
          <Row>
            <Col>
              <div className="bee-informed">Bee informed</div>
              <div className="bee-informed">when we launch.</div>
              <h6 className="mt-2">
                Drop your deets and we'll give you a buzz
              </h6>
            </Col>
          </Row>
          <Row></Row>
        </Col>
        <Col>
          {" "}
          <Form>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-2">
              <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
