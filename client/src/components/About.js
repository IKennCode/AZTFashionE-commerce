import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <Card body>
            <p>This is a more customized about page.</p>
            <ul>
              <li>We are a team of experienced developers who are passionate about building high-quality web applications.</li>
              <li>We use the latest technologies and best practices to create applications that are both user-friendly and scalable.</li>
              <li>We are committed to providing our clients with the best possible service and support.</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;