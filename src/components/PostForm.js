import Layout from './Layout';
import './PostForm.css';
import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const PostForm = (props) => {
  const [postTitle, setPostTitle] = useState(null);
  const [postBody, setPostBody] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [newUrl, setNewUrl] = useState(null);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === undefined) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('user'),
        },
        body: JSON.stringify({
          author: props.userId,
          title: postTitle,
          body: postBody,
        }),
      };
      fetch('https://serene-waters-04286.herokuapp.com/posts/', requestOptions)
        .then((response) => response.json())
        .then((results) => {
          return setNewUrl(results.url);
        })
        .catch((error) => {
          console.log('The fetch error is: ' + error);
        });
    } else {
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('user'),
        },
        body: JSON.stringify({ title: postTitle, body: postBody }),
      };
      fetch(
        'https://serene-waters-04286.herokuapp.com/posts/' + id,
        requestOptions
      ).then(() => setRedirect(true));
    }
  };

  useEffect(() => {
    if (id === undefined) {
    } else {
      const fetchPostDetails = async () => {
        const response = await fetch(
          'https://serene-waters-04286.herokuapp.com/posts/' + id + '/edit',
          {
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('user'),
            },
          }
        );
        const data = await response.json();
        const item = data.post;
        setPostTitle(item.title);
        setPostBody(item.body);
      };
      fetchPostDetails();
    }
  }, [id]);

  return (
    <Layout authState={props.authState}>
      {newUrl !== null && <Redirect to={newUrl} />}
      {redirect === true && newUrl === null && (
        <Redirect from="/posts/:id/edit" to={'/posts/' + id} />
      )}
      <div className="postEditForm">
        <form onSubmit={handleSubmit}>
          <label>Title: </label>
          <br />
          <input
            type="text"
            name="title"
            value={postTitle ? postTitle : ''}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
          <br />
          <label>Body: </label>
          <br />
          <textarea
            name="body"
            value={postBody ? postBody : ''}
            onChange={(e) => setPostBody(e.target.value)}
            required
          />
          <input type="submit" id="submitPostForm" value="Submit" />
        </form>
      </div>
    </Layout>
  );
};

export default PostForm;
