import React from "react";

import { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

import NavBrand from "./NavBrand";
import SearchBar from "./SearchBar";
import NavToggle from "./NavToggle";
import NavModal from "./NavModal";
import { AppProps } from "../../utils/typs";

export default function MyNavbars({ showPosts }: {showPosts: Function}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top nav">
      <Row className="d-flex align-items-start w-100">
        <NavBrand />
        <SearchBar />
        <NavToggle handleShow={handleShow} />
      </Row>
      <NavModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        showPosts={showPosts}
      />
    </Navbar>
  );
}
