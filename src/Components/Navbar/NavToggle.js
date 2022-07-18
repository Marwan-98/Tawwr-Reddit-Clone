import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

export default function NavToggle({ handleShow }) {
  return (
    <Col xs={2}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="w-100 justify-content-center align-items-center nav-box">
          <Nav.Item>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="face-pic px-2"
              alt="user"
            />
          </Nav.Item>
          <Nav.Item href="#action/3.2">
            <Button onClick={handleShow} className="mx-1 nav-btn">
              New Post
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Col>
  );
}
