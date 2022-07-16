import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import Container from "react-bootstrap/Container";

import { API } from "../API/api";

import Comment from "./Comment.js";
import PostBody from "./PostBody.js";
import AddComment from "./AddComment.js";

import Row from "react-bootstrap/Row";

export default function Post({ getPost }) {
  const { id } = useParams();

  const posts = useSelector((state) => state.posts);
  let post = posts.filter((post) => post.id === +id)[0];

  const comments = post.comments.sort((a, b) => b.id - a.id);

  const vote = (sign) => {
    API.post("/posts/" + id + "/vote", {
      userId: post.userId,
      userVote: sign,
    }).then(() => {
      getPost();
    });
  };
  return (
    <Container className="pt-5">
      <PostBody post={post} vote={vote} />
      <AddComment id={id} getPost={getPost} />
      <div className="comment-box mt-5 pt-4 pb-0 text-start col-lg-6 col-xs-12">
        <Row className="px-3">
          <h5>Comments</h5>
        </Row>
        <hr />
        {comments.map((comment) => (
          <Comment
            userId={comment.userId}
            body={comment.body}
            key={comment.id}
          />
        ))}
      </div>
    </Container>
  );
}
