import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { postComment } from "../store/comments/apiActions";

function CommentForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const storeStatus = useSelector((state) => {
    return state.comments.status;
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postComment({ name, message: comment }));
  }

  useEffect(() => {
    if (storeStatus === 'idle') {
      setName('');
      setComment('');
    }
  }, [storeStatus]);

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
