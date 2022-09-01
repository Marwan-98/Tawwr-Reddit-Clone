import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useDispatch, useSelector } from "react-redux/es/exports";

import { API } from "../../../API/api";

import { getaComment } from "../../../actions/getcomment.action";

export default function AddComment({ id, showPosts, showPost }: { id: number, showPosts: Function, showPost: Function}) {
  const comment = useSelector((state: { comment: string }) => state.comment);

  const dispatch = useDispatch();

  const getComment = (e: { target: { value: string } }) => {
    dispatch(getaComment(e.target.value));
  };

  const addComment = () => {
    API.post("/comments/new", {
      body: comment,
      post: id,
      user: 2,
    }).then(() => {
      showPost(id);
      dispatch(getaComment(""));
    });
  };

  return (
    <div className="comment-box mt-5 py-4 px-3 text-start col-lg-6 col-xs-12">
      <Form.Label>Add a comment</Form.Label>
      <InputGroup>
        <Form.Control onChange={getComment} value={comment} />
        <Button id="button-addon1" onClick={addComment}>
          Add
        </Button>
      </InputGroup>
    </div>
  );
}
