import { formatDateTime } from "../util/DateFormatter";

function CommentListItem({ data }) {
  return (
    <li className="comment-list-item">
      <p>{data.message}</p>
      <div>
        <small>
          <span>{data.name},</span> <span>{formatDateTime(data.created)}</span>
        </small>
      </div>
    </li>
  );
}

export default CommentListItem;
