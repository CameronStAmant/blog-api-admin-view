import Layout from './Layout';
import { useParams, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';

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
      baseUrl + '/posts/' + id + '/comments/' + commentId,
      requestOptions
    ).then(() => {
      history.push('/posts/' + id);
    });
  };

  useEffect(() => {
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
  }, [id, commentId]);

  return (
    <Layout authState={props.authState}>
      <div className="justify-self-stretch gap-4 col-span-full row-start-2">
        <form className="mt-14 mx-4 text-center h-auto" onSubmit={handleSubmit}>
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
          <input
            type="submit"
            id="commentSubmit"
            className="border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 active:bg-green-400 active:border-green-400 shadow-sm"
            value="Submit"
          />
        </form>
      </div>
    </Layout>
  );
};

export default CommentForm;
