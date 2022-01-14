import React from "react";
import Post from "./Interface/PostInterface";
import PostInList from "./PostInList";
import "./SocialPosts.css";
import PostForm from "./PostForm";
import { useState } from "react";

function SocialPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isClosed, setIsClosed] = useState<Boolean>(true);

  function handleFormSubmit(post: Post): void {
    setPosts((prev) => [...posts, post]);
  }

  function onClose() {
    setIsClosed(true);
  }

  return (
    <div className="container">
      <div className="SocialPosts">
        <h1>My Thoughts</h1>
        <button onClick={() => setIsClosed(false)}>New Thought</button>
        <div className="postList">
          {posts.map((post, i) => (
            <PostInList key={i} post={post} />
          ))}
        </div>
      </div>
      <PostForm
        close={isClosed}
        onClose={onClose}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default SocialPosts;
