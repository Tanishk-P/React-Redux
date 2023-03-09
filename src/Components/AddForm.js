import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getPosts, updatedPosts } from "../Actions/postActions";
import ReactLoading from "react-loading";

function AddForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, displayLoading] = useState(false);
  const dispatch = useDispatch();

  function checkValidation() {
    let validated = true;
    const validTitle = new RegExp("^[a-zA-Z\\s]*$");

    if (!validTitle.test(title)) {
      toast.warn("Invaild Title.");
      validated = false;
    }
    if (!title) {
      toast.warn("Title is empty.");
      validated = false;
    }
    if (!body) {
      toast.warn("Body is empty.");
      validated = false;
    }
    return validated;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkValidation()) {
      displayLoading(true);
      updatedPosts(title, body).then(res => {
        if (res.status === 201) {
          displayLoading(false);
          toast.success("Added the post successfully.");
          dispatch(getPosts());
          setTitle('');
          setBody('');
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  return (
    <div>
      <div className={`formAdd ${loading ? 'loading-bg' : ''}`}>
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
            <div>
              <button className="submit" type="submit">Submit</button>
            </div>
          </form>
        </div>
        {loading && <div className="loading-overlay"><ReactLoading color="lightgreen" delay={0.05} type="bars"></ReactLoading></div>}
        <div className="yourPost">
          <div>
            <input className="postTitle" placeholder="Post title" readOnly value={title} />
            <hr />
            <p>{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
