import { FETCH_POSTS, NEW_POSTS } from "./types";
import axios from "axios";

// export const fetchPosts = () => (dispatch) => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((posts) =>
//       dispatch({
//         type: FETCH_POSTS,
//         payload: posts,
//       })
//     );
// };

export const createPost = (postData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    
};

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: FETCH_POSTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const addPosts = (post) => async dispatch => {
  try {
  const res = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
  dispatch({
    type: NEW_POSTS,
    payload: res.data
  });
  }  catch (err) {
    console.log(err)
  }
}

export const updatedPosts = (title, body) => {
  return new Promise((resolve, reject) =>{
    axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: {
        title: title,
        body: body
      }
    }).then(response => {
      console.log(response);
      resolve(response);
    }).catch(error => {
      reject(error);
    })
  })
} 