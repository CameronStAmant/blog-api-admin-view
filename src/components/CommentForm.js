import Layout from './Layout';
import './CommentForm.css';
import { useParams, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const CommentForm = (props) => {
  const [commentBody, setCommentBody] = useState(null);
  const { id, commentId } = useParams();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user'),
      },
      body: JSON.stringify({ body: commentBody }),
    };
    fetch(
      'https://serene-waters-04286.herokuapp.com/posts/' +
        id +
        '/comments/' +
        commentId,
      requestOptions
    ).then(
      setTimeout(() => {
        history.push('/posts/' + id);
      }, 100)
    );
  };

  useEffect(() => {
    const fetchCommentDetails = async () => {
      const response = await fetch(
        'https://serene-waters-04286.herokuapp.com/posts/' +
          id +
          '/comments/' +
          commentId +
          '/edit',
        {
          mode: 'cors',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('user'),
          },
        }
      );
      const data = await response.json();
      const item = data.comment;
      setCommentBody(item.body);
    };
    fetchCommentDetails();
  }, [id, commentId]);

  return (
    <Layout authState={props.authState}>
      <div className="commentEditForm">
        <form onSubmit={handleSubmit}>
          <label>Body: </label>
          <br />
          <textarea
            name="body"
            value={commentBody ? commentBody : ''}
            onChange={(e) => setCommentBody(e.target.value)}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Layout>
  );
};

export default CommentForm;
