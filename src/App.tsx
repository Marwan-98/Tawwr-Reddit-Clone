import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { handlePosts } from "./actions/handleposts.action";
//--
import Post from "./Components/Post/Post";
import Posts from "./Components/Main/Posts";
import MyNavbars from "./Components/Navbar/Navbar";
import Skeleton from "./Components/Main/Skeleton";

import { getPosts } from "./API/api";
import { AppProps } from "./utils/typs";

function App() {
  const posts = useSelector((state: AppProps) => state.posts);
  const filter = useSelector((state: AppProps) => state.filter);

  
  const dispatch = useDispatch();
  
  const showPosts = () => {
    getPosts().then((response) => {
      response = response.data.sort(
        (a: { id: number }, b: { id: number }) => b.id - a.id
        );
        dispatch(handlePosts(response));
    });
  };

  const filterPosts = () => {
    if (filter === "") {
      return posts;
    } else {
      return posts!.filter((post) => post.title.toLowerCase().includes(filter!));
    }
  };
  
  useEffect(() => {
    showPosts();
    console.log(posts);
  }, []);

  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <MyNavbars showPosts={showPosts} />
      <Routes>
        <Route
          path="/"
          element={posts ? <Posts filterPosts={filterPosts} /> : <Skeleton />}
        ></Route>
        <Route
          path="/post/:id"
          element={<Post showPosts={showPosts} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
