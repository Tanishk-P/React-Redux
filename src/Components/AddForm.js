import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/note.png";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AddForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const postTitle = [title];
    const postBody= [body];

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (title && body) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          title: title,
          body: body,
          userId: 1
        });
        toast.success("Added the post successfully.");
        console.log(response.data);
        // post.push(response.data)
      } else {
        toast.error("Cannot add empty post.")
      }
      setTitle('');
      setBody('');
    };

  return (
    <div className="formAdd">
      <div className="addPosts">
        <form onSubmit={handleSubmit}>
          <h1>Add Posts:</h1>
          <div>
            <label>
              <input
                style={{
                  border: 'none',
                  width: '90%',
                  borderRadius: '5px',
                  padding: '10px',
                  margin: '2px'
                }}
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a post title"
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              <textarea
                style={{
                  border: 'none',
                  borderRadius: '5px',
                  width: '100%',
                  height: '6vh'
                }}
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Enter body"
              />
            </label>
          </div>
          <br />
          {/* <div>
            <label htmlFor="file">
              <img
                src={logo}
                style={{ height: "22px", width: "22px" }}
                alt="Add your Post Image"
              />
            </label>
          </div> */}
          <div>
            <button className="submit" type="submit">Submit</button>
          </div>
        </form>
      </div>  
      <div 
          className="yourPost"
          style={{
            backgroundColor: "InfoBackground",
            marginLeft: "10px",
            height: "30vh",
            width: "60vw",
            color: "GrayText",
            padding: "5px",
            gap: "15px",
            border: "dashed",
            borderRadius: '5px'
          }}
          >
          <div>
            {/* <h2>{postTitle}</h2> */}
            <input placeholder="Post title" readOnly value={postTitle} style={{ 
              marginTop: "10px",
              border: 'none',
              fontSize: "24px",
              fontWeight: "bold",
              color: "GrayText",
              width: "100%"
            }}/>
            <hr/>            
            <p style={{ overflow: "none"}} placeholder="your post body">{postBody}</p>
            {/* <input placeholder="Post body" readOnly value={postBody} style={{ 
              marginTop: "10px",
              border: 'none',
              fontSize: "16px",
              color: "GrayText",
            }}/> */}
          </div>
        </div>
    </div>
  );
}

export default AddForm;
