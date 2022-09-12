import React from "react";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import moment from "moment";

import { ReactComponent as ThumbsUp } from "../../assets/hand-thumbs-up.svg";
import { ReactComponent as ThumbsDown } from "../../assets/hand-thumbs-down.svg";
import { ReactComponent as CommentBubble } from "../../assets/chat-left-dots.svg";
import { Post } from "../../utils/typs";

export default function Posts({ filterPosts }: { filterPosts: Function }) {
  return (
    <Container className="mt-5 pt-4 posts-container">
      {filterPosts().map((post: Post) => (
        <div
          className="post-body my-3 px-3 py-4 text-start col-lg-6 col-xs-12"
          key={post.id}
        >
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <div>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="post-face-pic"
                  alt="user"
                />
              </div>
              <div className="m-2">
                <h6 className="m-0">{`${post.user.firstname} ${post.user.lastname}`}</h6>
                <span>
                  {moment(post.createdAt).format("MMMM D")} at{" "}
                  {moment(post.createdAt).format("h:mm A")}
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <h2>{post.title}</h2>
          </Row>
          <Row>
            <p>{post.body}</p>
          </Row>
          <Row className="align-items-center justify-content-start">
            <Col xs={8} lg={6}>
              <span className="statistics">
                <ThumbsUp />
                {"  "}
                {post.upVotesTotal}
              </span>
              <span className="statistics">
                <ThumbsDown />
                {"  "}
                {post.downVotesTotal}
              </span>
              <span className="statistics">
                <CommentBubble />
                {"  "}
                {post.commentsTotal}
              </span>
            </Col>
            <Col className="text-end" xs={4} lg={6}>
              <Link to={"/post/" + post.id}>
                <Button variant="light">
                  Open post
                  {"  "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
}
