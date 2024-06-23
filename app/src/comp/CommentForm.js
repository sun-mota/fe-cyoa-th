import { useState } from "react";
import { useDispatch } from 'react-redux';
import { postComment } from "../store/comments/slice";

function CommentForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, comment);
    postComment({ dispatch }, { name, message: comment }).then(() => {
      setName("");
      setComment("");
    }).catch(err => {
      window.alert("something went wrong");
    });
  }

  return (
    <div className="comment-form">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label><input type="text" id="name" value={name} onChange={(e) => setName(e.currentTarget.value)} required/>
        <textarea id="comment" aria-label="comment message" value={comment} onChange={(e) => setComment(e.currentTarget.value)} required/>
        <button type="submit" aria-label="submit">Comment</button>
      </form>
    </div>
  );
}

export default CommentForm;
