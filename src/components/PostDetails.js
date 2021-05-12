import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import './PostDetails.css';
import Layout from './Layout';
import Comments from './Comments';

const PostDetails = (props) => {
  const [postDetails, setPostDetails] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  const deletePost = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user'),
      },
      body: JSON.stringify({
        post: id,
      }),
    };
    fetch(
      'https://serene-waters-04286.herokuapp.com/posts/' + id,
      requestOptions
    ).then(() => {
      history.push('/');
    });
  };

  useEffect(() => {
    const fetchPostDetails = async () => {
      const response = await fetch(
        'https://serene-waters-04286.herokuapp.com/posts/' + id,
        {
          mode: 'cors',
        }
      );
      const data = await response.json();
      const item = data.post;
      setPostDetails(item);
    };
    fetchPostDetails();
  }, [id]);

  return (
    <Layout authState={props.authState}>
      <div className="postLayout">
        <div className="post">
          <h2>{postDetails ? postDetails.title : ''}</h2>
          <br />
          <form action={useLocation().pathname + '/edit'}>
            <input type="submit" value="Edit" />
          </form>
          <form onSubmit={deletePost}>
            <input type="submit" value="Delete" />
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
