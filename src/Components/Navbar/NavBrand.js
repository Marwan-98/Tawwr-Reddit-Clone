import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

export default function NavBrand() {
  return (
    <Col xs={3} lg={2}>
      <Navbar.Brand href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/5/58/Reddit_logo_new.svg"
          alt="logo"
        />
      </Navbar.Brand>
    </Col>
  );
}
