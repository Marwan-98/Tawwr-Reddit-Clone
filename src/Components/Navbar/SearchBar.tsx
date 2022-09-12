import React, { ChangeEvent } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { setFilter } from "../../actions/setFilter.action";

export default function SearchBar() {
  const dispatch = useDispatch();

  const getFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter((e.target.value).toLowerCase()));
  };

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
