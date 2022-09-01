import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:4000" });

export const getPosts = () => {
  return API.get("/posts");
};

export const getPost = (id: string) => {
  return API.get(`posts/${id}`)
}

export const showPost = (title: string, description: string) => {
  return API.post("/posts/new", {
    title: title,
    body: description,
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


