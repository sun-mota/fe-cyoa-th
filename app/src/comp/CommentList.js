import { useSelector } from 'react-redux'
import CommentListItem from "./CommentListItem";

function CommentList() {
  const list = useSelector((state) => {
    return state.comments.list
  });

  return (
    <ul className="comment-list">
      {
        list?.map(item =>  <CommentListItem key={item.id} data={item}/>)
      }
    </ul>
  );
}

export default CommentList;
