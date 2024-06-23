import { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteComments } from "../store/comments/slice";

export default function CommentsFlushButton() {
  const dispatch = useDispatch();

  function onClick(e) {
    e.preventDefault();
    if (window.confirm("Do you want to delete all?")) {
      deleteComments({ dispatch });
    }
  }
  return <button id="delete-all" aria-label='delete all' onClick={onClick}>X</button>;
}