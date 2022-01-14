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

  function handleDeletePost(index: number) {
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }

  return (
    <div className="containerMain">
      <div className="SocialPosts">
        <h1>My Thoughts</h1>
        <button onClick={() => setIsClosed(false)}>New Thought</button>
        <div className="postList">
          {posts.length ? (
            <div className="postContainer">
              {posts.map((post, i) => (
                <PostInList
                  key={i}
                  post={post}
                  onDelete={() => handleDeletePost(i)}
                />
              ))}
            </div>
          ) : (
            <div className="noThoughts">
              <h2>No Thoughts</h2>
              <p>Click "New Thought" Button To Add A Thought</p>
            </div>
          )}
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
