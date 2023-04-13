import React, { useEffect, useState, useContext } from "react";
import style from "./MainFile.module.css";
import axios from "axios";

const PostContext = React.createContext();

const usePost = () => {
  return useContext(PostContext);
};

export default function UseContext() {
  const [post, setPost] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => setPost(data.data));
  }, []);

  console.log(post[1]);

  const handleClick = (i) => {
    setIndex(i);
  };

  const value = {
    post,
    index,
  };

  return (
    <PostContext.Provider value={value}>
      <div className={style.container}>
        <div className={style.postListCont}>
          {post.map((post, i) => (
            <div onClick={() => handleClick(i)} className={style.postItem}>
              <p>
                {i + 1} - {post.title}
              </p>
            </div>
          ))}
        </div>
        <PostDetails />
      </div>
    </PostContext.Provider>
  );
}

function PostDetails() {
  const { index, post } = usePost();
  return (
    <div className={style.postDetailsCont}>
      <div className={style.postDetalils}>
        {index + 1} - {post[index]?.body}
      </div>
    </div>
  );
}
