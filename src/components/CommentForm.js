import { useParams, Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';
import Button from './Button';

const CommentForm = (props) => {
  const [commentBody, setCommentBody] = useState(null);
  const { id, commentId } = useParams();
  const history = useHistory();
  const [body, setBody] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (commentId !== undefined) {
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('user'),
        },
        body: JSON.stringify({ body: commentBody }),
      };
      fetch(
        baseUrl + '/posts/' + id + '/comments/' + commentId,
        requestOptions
      ).then(() => {
        history.push('/posts/' + id);
      });
    } else {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('user'),
        },
        body: JSON.stringify({
          author: props.userId,
          body: commentBody,
        }),
      };
      await fetch(baseUrl + '/posts/' + id + '/comments', requestOptions);
      props.setComments();
      setBody(null);
      props.loadComments();
    }
  };

  useEffect(() => {
    if (commentId !== undefined) {
      const fetchCommentDetails = async () => {
        const response = await fetch(
          baseUrl + '/posts/' + id + '/comments/' + commentId + '/edit',
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
    } else {
      setCommentBody(null);
    }
  }, [id, commentId, props.comments]);

  return (
    <div className="justify-self-stretch gap-4 col-span-full row-start-2">
      <form className="mt-14 mx-4 text-center h-auto">
        <label>Body: </label>
        <br />
        <textarea
          className="box-border border-2 shadow-sm rounded-md gap-4 border-green-200 auto-rows-min w-full"
          rows="12"
          name="body"
          value={commentBody ? commentBody : ''}
          onChange={(e) => setCommentBody(e.target.value)}
          required
        />
        {commentId && (
          <Link to={'/posts/' + id}>
            <Button value="Cancel" color="green" />
          </Link>
        )}
        <Button value="Submit" color="green" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default CommentForm;
