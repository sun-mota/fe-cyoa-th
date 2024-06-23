import { useEffect } from 'react';
import { fetchComments } from './store/comments/slice';
import { Provider } from 'react-redux';
import store from "./store";
import './App.css';
import CommentForm from './comp/CommentForm';
import CommentList from './comp/CommentList';
import CommentsFlushButton from './comp/CommentsFlushButton';

function App() {
  useEffect(() => {
    fetchComments(store);
  }, []);
  
  return (
    <Provider store={store}>
      <div className="App">
        <CommentForm/>
        <CommentList/>
        <CommentsFlushButton/>
      </div>
    </Provider>
  );
}

export default App;
