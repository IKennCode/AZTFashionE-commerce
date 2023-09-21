import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Pagenotfound = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Page Not Found</h1>
          <Card body>
            <p>The page you are looking for does not exist.</p>
            <ul>
              <li>You may have mistyped the URL.</li>
              <li>The page may have been moved or deleted.</li>
              <li>You may not have permission to access the page.</li>
            </ul>
            <p>If you are unsure why you are seeing this page, please contact the website administrator.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pagenotfound;