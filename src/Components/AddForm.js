import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../Actions/postActions";
import logo from "../images/note.png";

function AddForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

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
            <input name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter a post title" />
          </label>
        </div>
        <br />
        <div>    
          <label>
            <textarea name="body" value={body} onChange={e => setBody(e.target.value)} placeholder="Enter body" />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor='file'>
            <img src={logo} style={{height:'22px',width:'22px'}} alt='Add your Post Image'/>
          </label>
        </div>
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
