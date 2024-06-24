import { formatDateTime } from "../util/DateFormatter";

function CommentListItem({data}) {
  return (
    <li className="comment-list-item" role="comment">
      <button aria-labelledby={`comment-${data.id}`}/>
      <article id={`comment-${data.id}`}>
        <p>{data.message}</p>
        <div><small><span>{data.name}</span> <span>{formatDateTime(data.created)}</span></small></div>
      </article>
    </li>
  );
}

export default CommentListItem;
