import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome Home</h1>
          <Card body>
            <p>This is a more customized home page.</p>
            <ul>
              <li>This is the first item in the list.</li>
              <li>This is the second item in the list.</li>
              <li>This is the third item in the list.</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;