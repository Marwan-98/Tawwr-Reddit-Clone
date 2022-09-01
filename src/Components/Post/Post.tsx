import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";

import Container from "react-bootstrap/Container";

import PostBody from "./PostBody";
import Comment from "./Comment/Comment";
import AddComment from "./Comment/AddComment";

import Row from "react-bootstrap/Row";
import axios from "axios";
import { handlePost } from "../../actions/handlepost.action";
import { AppProps } from "../../utils/typs";
import { getPost } from "../../API/api";

export default function Post({ showPosts }: { showPosts: Function }) {
  const { id } = useParams();
  const dispatch = useDispatch()
  
  const post = useSelector((state: AppProps) => state.post)
  const comments = post?.comments?.sort((a,b) => b.id - a.id);

  const showPost = (id: string) => {
    getPost(id).then((res) => {
      dispatch(handlePost(res.data))
      })
  };

  useEffect(() => {
    showPost(id!);
  }, [])

  return (
    <Container className="pt-5">
      <PostBody post={post} showPosts={showPosts} showPost={showPost}/>
      <AddComment id={+id!} showPosts={showPosts} showPost={showPost}/>
      <div className="comment-box mt-5 pt-4 pb-0 text-start col-lg-6 col-xs-12">
        <Row className="px-3">
          <h5>Comments</h5>
        </Row>
        <hr />
        {comments?.map((comment) => (
          <Comment
            id={comment.id}
            body={comment.body}
            key={comment.id}
            dateCreated={comment.dateCreated}
          />
        ))
      }
      </div>
    </Container>
  );
}
