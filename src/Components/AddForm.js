import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../Actions/postActions";

function AddForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();
    // const newPosts = useSelector((state) => state.posts.item )

    // useEffect(() => {
    //     dispatch()
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPosts({title, body}));
        setTitle('');
        setBody('');
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add Posts:</h1>
        <div>
          <label>
            Post Title:
            <input name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter a post title" />
          </label>
        </div>
        <br />
        <div>    
          <label>
            Post Body:
            <textarea name="body" value={body} onChange={e => setBody(e.target.value)} placeholder="Enter body" />
          </label>
        </div>
        <br />
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
