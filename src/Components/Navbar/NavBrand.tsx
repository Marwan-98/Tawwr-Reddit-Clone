import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

export default function NavBrand() {
  return (
    <Col xs={3} lg={2}>
      <Navbar.Brand href="/">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
          alt="logo"
        />
      </Navbar.Brand>
    </Col>
  );
}
