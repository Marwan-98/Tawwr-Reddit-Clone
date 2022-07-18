import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export default function SearchBar({ getFilter }) {
  return (
    <Col xs={7} lg={8}>
      <Form>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={getFilter}
        />
      </Form>
    </Col>
  );
}
