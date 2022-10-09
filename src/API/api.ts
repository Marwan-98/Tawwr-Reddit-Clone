import axios from "axios";

export const API = axios.create({
  baseURL: "https://blog-server-0e4r.onrender.com",
});

export const getPosts = () => {
  return API.get("/posts");
};

export const getTags = () => {
  return API.get("/tags");
};

export const getPost = (id: string) => {
  return API.get(`posts/${id}`);
};

export const showPost = (
  title: string,
  description: string,
  tags: Number[]
) => {
  return API.post("/posts/new", {
    title: title,
    body: description,
    tags: tags,
    user: 2,
  });
};

export const addVote = async (userId: number, id: number, sign: number) => {
  return API.post("/votes/new", {
    user: userId,
    post: id,
    vote: sign,
  });
};
