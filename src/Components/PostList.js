import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from "../Actions/postActions";

function PostList() {
  const dispatch = useDispatch();
  const postItems = useSelector(state => state.posts.postList);
   const List = postItems.map((post) => (
    <div key={post.id}>
      <ul>
          <h2>{post.id}- {post.title}</h2>
          <p>{post.body}</p>
      </ul>
    </div>
  ));

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {List}
    </div>
  );
}

export default PostList;
