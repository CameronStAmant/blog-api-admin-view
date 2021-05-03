import Layout from './Layout';
import './CommentForm.css';
import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const CommentForm = () => {
  const [commentBody, setCommentBody] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const { id, commentId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: commentBody }),
    };
    fetch(
      'http://localhost:3000/posts/' + id + '/comments/' + commentId,
      requestOptions
    ).then(setRedirect(true));
  };

  useEffect(() => {
    const fetchCommentDetails = async () => {
      const response = await fetch(
        'http://localhost:3000/posts/' +
          id +
          '/comments/' +
          commentId +
          '/edit',
        {
          mode: 'cors',
        }
      );
      const data = await response.json();
      const item = data.comment;
      setCommentBody(item.body);
    };
    fetchCommentDetails();
  }, [id, commentId]);

  return (
    <Layout>
      {redirect === true && (
        <Redirect
          from="/posts/:id/comments/:commentId/edit"
          to={'/posts/' + id}
        />
      )}
      <div className="commentEditForm">
        <form onSubmit={handleSubmit}>
          <label>Body: </label>
          <br />
          <textarea
            name="body"
            value={commentBody ? commentBody : ''}
            onChange={(e) => setCommentBody(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Layout>
  );
};

export default CommentForm;
