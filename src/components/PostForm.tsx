import React from "react";
import "./PostForm.css";
import { useState, FormEvent } from "react";
import Post from "./Interface/PostInterface";
import cancel from "./cancel_black_24dp.svg";

interface Props {
  close: Boolean;
  onClose: () => void;
  onSubmit: (post: Post) => void;
}

function PostForm({ close, onClose, onSubmit }: Props) {
  let addClass = "";
  if (close) addClass += "hide";

  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    const newPost: Post = {
      title: title,
      thought: thought,
    };
    onSubmit(newPost);
    onClose();
    setTitle("");
    setThought("");
  }

  return (
    <div className={`PostWindow ${addClass}`} onSubmit={handleFormSubmit}>
      <div className="PostForm">
        <button className="x" onClick={onClose}>
          ✖︎
        </button>
        {cancel}
        <form>
          <p>
            <label htmlFor="title">Title</label>
          </p>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>
            <label htmlFor="thought">Thought</label>
          </p>
          <textarea
            id="thought"
            placeholder="Thought"
            value={thought}
            onChange={(e) => setThought(e.target.value)}
          />
          <button type="submit">Add Post</button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
