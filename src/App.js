import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getPosts } from "./actions/getposts.action";
import { setFilter } from "./actions/setFilter.action";
//--
import Post from "./Components/Post/Post";
import Posts from "./Components/Main/Posts";
import MyNavbars from "./Components/Navbar/Navbar";
import Skeleton from "./Components/Main/Skeleton";

import { API } from "./API/api";

function App() {
  const posts = useSelector((state) => state.posts);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const getPost = () => {
    API.get("/posts").then((response) => {
      response = response.data.data.sort((a, b) => b.id - a.id);
      dispatch(getPosts(response));
    });
  };

  const getFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filterPosts = () => {
    if (filter === "") {
      return posts;
    } else {
      return posts.filter((post) => post.title === filter);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const addPost = (title, description) => {
    API.post("/posts", {
      body: description,
      title: title,
      userId: 2,
    }).then(() => {
      getPost();
    });
  };

  //"https://jsonplaceholder.typicode.com/users/"

  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <MyNavbars addPost={addPost} getPost={getPost} getFilter={getFilter} />
      <Routes>
        <Route
          path="/"
          element={posts ? <Posts filterPosts={filterPosts} /> : <Skeleton />}
        ></Route>
        <Route path="/post/:id" element={<Post getPost={getPost} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
