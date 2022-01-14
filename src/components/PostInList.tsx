import React from "react";
import Post from "./Interface/PostInterface";

interface Props {
  post: Post;
}

function PostInList({ post }: Props) {
  return (
    <div className="PostInList">
      <h2>{post.title}</h2>
      <p>{post.thought}</p>
    </div>
  );
}

export default PostInList;
