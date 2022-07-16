import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Comment({ userId, body }) {
  return (
    <Row className="mt-2 mx-0 comment-body">
      <Col xs={2} className="text-end">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="post-face-pic"
          alt="user"
        />
      </Col>
      <Col xs={10}>
        <h6>{userId}</h6>
        <p>{body}</p>
        <strong>
          4d ago . <span>Reply</span>
        </strong>
      </Col>
      <hr />
    </Row>
  );
}
