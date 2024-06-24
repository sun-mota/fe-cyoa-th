import { post, setList, deleteAll, setError, setStatus } from './slice';

export function fetchComments() {
  return async function thunk(dispatch) {
    dispatch(setStatus('processing'));
    try {
      const response = await fetch('/getComments')
      const json = await response.json();
      dispatch(setList(json.reverse()));
      dispatch(setStatus('idle'));
    } catch (err) {
      dispatch(setStatus('error'));
      dispatch(setError("something went wrong during fetching"));
    }
  }
}

async function fetchComment(id) {
  const response = await fetch('/getComment/' + id)
  const json = await response.json();
  return json;
}

export function postComment({ name, message }) {
  return async function thunk(dispatch) {
    dispatch(setStatus('processing'));
    try {
      const response = await fetch('/createComment', 
        {
          method: 'POST', body: JSON.stringify({ name, message }),
          headers: { "Content-Type": "application/json" },
        });
      const json = await response.json();
      const newComment = await fetchComment(json.id);
      dispatch(post(newComment));
      dispatch(setStatus('idle'));
    } catch (err) {
      dispatch(setStatus('error'));
      dispatch(setError("something went wrong during posting a comment"));
    }
  }
};

export  function deleteComments() {
  return async function thunk(dispatch) {
    dispatch(setStatus('processing'));
    try {
      const response = await fetch('/deleteComments', { method: "DELETE" })
      if (response.status === 200) {
        dispatch(deleteAll());
      }
      dispatch(setStatus('idle'));
    } catch (err) {
      dispatch(setStatus('error'));
      dispatch(setError("something went wrong during deleting comments"));
    }
  }
}