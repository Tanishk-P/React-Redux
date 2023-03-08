import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from "../Actions/postActions";

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
      {List}
    </div>
  );
}

export default PostList;
