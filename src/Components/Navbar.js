import React from "react";

import { useState } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MyNavbars({ addPost, getFilter }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      userId: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required")
        .max(40, "limit passed")
        .min(20, "Please write 20 characters or more"),
      description: Yup.string()
        .required("your message is required")
        .min(20, "Please write 20 characters or more"),
    }),
    onSubmit: (values) => {
      addPost(values.title, values.description);
      setShow(false);
      formik.resetForm();
    },
  });

  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top nav">
      <Row className="d-flex align-items-start w-100">
        <Col xs={3} lg={2}>
          <Navbar.Brand href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/58/Reddit_logo_new.svg"
              alt="logo"
            />
          </Navbar.Brand>
        </Col>
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
      </Row>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Your Next Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                id="title"
                name="title"
                value={formik.values.title}
                type="text"
                placeholder="Add Title"
                onChange={formik.handleChange}
                onBlur={formik.handleChange}
              />
              {formik.touched.title && formik.errors.title && (
                <Alert variant="danger">{formik.errors.title}</Alert>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                id="description"
                name="description"
                value={formik.values.description}
                as="textarea"
                aria-label="With textarea"
                placeholder="write post"
                onChange={formik.handleChange}
                onBlur={formik.handleChange}
              />
              {formik.touched.description && formik.errors.description && (
                <Alert variant="danger">{formik.errors.description}</Alert>
              )}{" "}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Navbar>
  );
}
