import React from "react";
import Post from "./Interface/PostInterface";
import trash from "./trash-solid.svg";

interface Props {
  post: Post;
  onDelete: () => void;
}

function PostInList({ post, onDelete }: Props) {
  return (
    <div className="PostInList">
      <section className="thoughtContainer">
        <h2>{post.title}</h2>
        <p>{post.thought}</p>
      </section>
      <section className="deleteContainer">
        {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
        <img src={trash} alt="trash can icon" height={25} onClick={onDelete} />
      </section>
    </div>
  );
}

export default PostInList;
