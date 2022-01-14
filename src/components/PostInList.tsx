import React from "react";
import Post from "./Interface/PostInterface";
import DeleteIcon from "@mui/icons-material/Delete";

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
        <DeleteIcon style={{ fontSize: "35px" }} onClick={onDelete} />
      </section>
    </div>
  );
}

export default PostInList;
