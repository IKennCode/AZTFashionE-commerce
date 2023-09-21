import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Policy = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Privacy Policy</h1>
          <Card body>
            <p>This privacy policy explains how we collect, use, and share your information when you visit our website or use our services.</p>
            <ul>
              <li>We collect information about you when you register for an account, make a purchase, or sign up for our newsletter.</li>
              <li>We use your information to provide you with our services, improve our services, and communicate with you.</li>
              <li>We share your information with third-party vendors who help us provide our services, such as payment processors and email marketing providers.</li>
            </ul>
            <p>You have the right to access, correct, and delete your information. You can also opt out of receiving marketing communications from us.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Policy;