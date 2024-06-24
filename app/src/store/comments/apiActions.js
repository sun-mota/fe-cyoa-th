import { post, setList, deleteAll, setError, setStatus } from "./slice";

export function fetchComments() {
  return async function thunk(dispatch) {
    dispatch(setStatus("processing"));
    try {
      const response = await fetch("/getComments");
      const json = await response.json();
      dispatch(setList(json.reverse()));
      dispatch(setStatus("idle"));
    } catch (err) {
      // dispatch(setList([])); ?? Should I reset the list?
      dispatch(setStatus("not init"));
      dispatch(
        setError("Something went wrong during fetching. Refresh the page."),
      );
    }
  };
}

async function fetchComment(id) {
  const response = await fetch("/getComment/" + id);
  const json = await response.json();
  return json;
}

let errorTimeout = 0;
function setErrorStatus(dispatch, msg, clearMessageTimeout = 10 * 1000) {
  clearTimeout(errorTimeout);
  dispatch(setStatus("error"));
  if (clearMessageTimeout > 0) {
    dispatch(setError(msg));
    errorTimeout = setTimeout(() => {
      dispatch(setError(""));
    }, clearMessageTimeout);
  }
}

export function postComment({ name, message }) {
  return async function thunk(dispatch) {
    dispatch(setStatus("processing"));
    try {
      const response = await fetch("/createComment", {
        method: "POST",
        body: JSON.stringify({ name, message }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      const newComment = await fetchComment(json.id);
      dispatch(post(newComment));
      dispatch(setStatus("idle"));
    } catch (err) {
      setErrorStatus(
        "Something went wrong during posting a comment. Please try again later.",
      );
    }
  };
}

export function deleteComments() {
  return async function thunk(dispatch) {
    dispatch(setStatus("processing"));
    try {
      const response = await fetch("/deleteComments", { method: "DELETE" });
      if (response.status === 200) {
        dispatch(deleteAll());
      }
      dispatch(setStatus("idle"));
    } catch (err) {
      setErrorStatus(
        dispatch,
        "Something went wrong during deleting comments. Please try agin.",
      );
    }
  };
}
