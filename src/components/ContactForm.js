import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactForm() {
  const [option1Checked, setOption1Checked] = useState(false);
  const [option2Checked, setOption2Checked] = useState(true);

  console.log("option1Checked", option1Checked);
  return (
    <Container className="contact-container mt-3">
      <Row>
        <Col lg={4} md={6} sm={12}>
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
        <Col lg={4} md={6} sm={12}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-2">
              <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
          </Form>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Row id="radio-button-row">
            <Col className="radio-signup-col pb-3" lg={4} md={6} sm={12}>
              <Form>
                <Form.Check
                  type="radio"
                  label="Count me in as a seller"
                  name="radioGroup1"
                  id="radioOption1"
                  checked={option1Checked}
                  onClick={() => setOption1Checked((prev) => !prev)}
                />
              </Form>
              <Form>
                <Form.Check
                  type="radio"
                  label="Sign me up for news"
                  name="radioGroup1"
                  id="radioOption2"
                  checked={option2Checked}
                  onClick={() => setOption2Checked((prev) => !prev)}
                />
              </Form>
            </Col>
            <Col className="radio-signup-col pb-3" lg={4} md={6} sm={12}>
              <Button id="signup-button">Sign me up</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
