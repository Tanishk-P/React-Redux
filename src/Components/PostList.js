import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from "../Actions/postActions";
import logo from "../images/note.png"

function PostList() {
  const dispatch = useDispatch();
  const postItems = useSelector(state => state.posts.postList);
   const List = postItems.map((post) => (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  ));

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleClick = () => {
    console.log('hello')
 
  }

  return (
    <div>
      <h1>Posts</h1>
      <input id='file' type={'file'} hidden />
      <label htmlFor='file'><img src={logo} style={{height:'22px',width:'22px'}} alt='Add your Post Image'/></label> 
    </div>
  );
}

export default PostList;
