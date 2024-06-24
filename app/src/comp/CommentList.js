import { useSelector } from "react-redux";
import CommentListItem from "./CommentListItem";

function CommentList() {
  const list = useSelector((state) => state.comments.list);
  const error = useSelector((state) => state.comments.error);

  return (
    <>
      {error ? <div className="error-message">{error}</div> : null}
      <ul className="comment-list">
        {list?.map((item) => (
          <CommentListItem key={item.id} data={item} />
        ))}
      </ul>
    </>
  );
}

export default CommentList;
