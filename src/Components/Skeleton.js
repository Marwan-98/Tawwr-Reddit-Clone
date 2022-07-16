import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Skeleton() {
  return (
    <Container className="mt-5 pt-4 posts-container">
      <div className="comment-box my-3 px-3 py-4 col-lg-6 col-xs-12">
        <Row className="mb-4 d-flex align-items-center">
          <Col xs={2} className="text-end">
            <div className="skeleton-img"></div>
          </Col>
          <Col>
            <div className="skeleton-text m-1"></div>
            <div className="skeleton-text m-1"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="skeleton-text m-1"></div>
            <div className="skeleton-text m-1"></div>
            <div className="skeleton-text m-1"></div>
            <div className="skeleton-text m-1"></div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
