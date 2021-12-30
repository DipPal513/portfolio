import React from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";
const Blog = () => {
  const history = useHistory();
  function handleBlogDetails(){
    history.push("/blog/blogdetails")
  }
  return (
    <div className="col-lg-4">
      <div className="card bg-dark">
        <img
          className="card-img-top"
          src="https://dyclassroom.com/image/topic/jwt/logo.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">what is JWT</h5>
          <p className="card-text">
          JSON Web Token (JWT) is an open standard 
          </p>
          <a className="btn btn-info" onClick={handleBlogDetails}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
