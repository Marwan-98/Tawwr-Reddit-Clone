import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { addVote, API, getPost } from "../../API/api";
import moment from "moment";

import { ReactComponent as ThumbsUp } from "../../assets/hand-thumbs-up.svg";
import { ReactComponent as ThumbsDown } from "../../assets/hand-thumbs-down.svg";
import { ReactComponent as CommentBubble } from "../../assets/chat-left-dots.svg";
import { Post } from "../../utils/typs";
import { useDispatch } from "react-redux";
import { handlePost } from "../../actions/handlepost.action";

export default function PostBody({ post, showPosts, showPost }: { post: Post, showPosts: Function, showPost: Function }) {
  const dispatch = useDispatch()

  const vote = (sign: number) => {
    API.post("/votes/new", {
      user: post.userId,
      post: post.id,
      vote: sign,
    }).then((res) => {
      console.log(res.data)
      showPost(post.id);
    })
  };
  return (
    <div className="post-body mt-5 px-0 py-4 text-start col-lg-6 col-xs-12">
      <Row className="mb-4 px-3">
        <Col className="d-flex align-items-center">
          <div>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="post-face-pic"
              alt="user"
            />
          </div>
          <div className="m-2">
            <h6 className="m-0">{post?.title}</h6>
            <span>
              {post?.userId} - {moment(post?.createdAt).format("MMMM D")} at{" "}
              {moment(post?.createdAt).format("h:mm A")}
            </span>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="px-3">
        <p>{post?.body}</p>
      </Row>
      <Row className="px-3 align-items-center justify-content-start">
        <Col>
          <span className="statistics" onClick={() => vote(1)}>
            <ThumbsUp className="post-icon" />
            {"  "}
            {post?.upVotesTotal}
          </span>
          <span className="statistics" onClick={() => vote(-1)}>
            <ThumbsDown className="post-icon" />
            {"  "}
            {post?.downVotesTotal}
          </span>
          <span className="statistics">
            <CommentBubble className="post-icon" />
            {"  "}
            {post?.commentsTotal}
          </span>
        </Col>
      </Row>
      {/* <Row>
        <Col className="d-flex tagtable">
          {post?.tags.map((tag) => (
            <p className="tag mx-1 py-1 px-3 my-2 text-center" key={tag.id}>
              {tag.name}
            </p>
          ))}
        </Col>
      </Row> */}
    </div>
  );
}
