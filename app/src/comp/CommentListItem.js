import { formatDateTime } from "../util/DateFormatter";

function CommentListItem({ data }) {
  return (
    <li className="comment-list-item" role="comment">
      <article id={`comment-${data.id}`}>
        <p>{data.message}</p>
        <div>
          <small>
            <span>{data.name}</span> <span>{formatDateTime(data.created)}</span>
          </small>
        </div>
      </article>
    </li>
  );
}

export default CommentListItem;
