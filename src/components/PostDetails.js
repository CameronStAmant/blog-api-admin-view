import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './PostDetails.css';
import Layout from './Layout';
import Comments from './Comments';

const PostDetails = () => {
  const [postDetails, setPostDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      const response = await fetch('http://localhost:3000/posts/' + id, {
        mode: 'cors',
      });
      const data = await response.json();
      const item = data.post;
      setPostDetails(item);
    };
    fetchPostDetails();
  }, [id]);

  return (
    <Layout>
      <div className="postLayout">
        <div className="post">
          <h2>{postDetails ? postDetails.title : ''}</h2>
          <br />
          <form
            action={'http://localhost:3002' + useLocation().pathname + '/edit'}
          >
            <input type="submit" value="Edit" />
          </form>
          <br />
          <p> {postDetails ? postDetails.body : ''}</p>
        </div>
        <Comments postid={id} />
      </div>
    </Layout>
  );
};

export default PostDetails;
