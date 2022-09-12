import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import moment from "moment";
import { PostComment } from "../../../utils/typs";

export default function Comment({ id, body, dateCreated, user }: PostComment) {
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
        <h6>{`${user.firstname} ${user.lastname}`}</h6>
        <p>{body}</p>
        {moment(dateCreated).format("h:mm A")}
        <span>Reply</span>
      </Col>
      <hr />
    </Row>
  );
}
