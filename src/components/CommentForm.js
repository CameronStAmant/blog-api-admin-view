import { useParams, Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';
import Button from './Button';
import Textarea from './Textarea';

const CommentForm = (props) => {
  const [body, setBody] = useState(null);
  const { id, commentId } = useParams();
  const history = useHistory();
  const [bodys, setBodys] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (commentId !== undefined) {
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('user'),
        },
        body: JSON.stringify({ body: body }),
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
          body: body,
        }),
      };
      await fetch(baseUrl + '/posts/' + id + '/comments', requestOptions);
      props.setComments();
      // setBodys(null);
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
        setBody(item.body);
      };
      fetchCommentDetails();
    } else {
      setBody(null);
    }
  }, [id, commentId, props.comments]);

  return (
    <div className="justify-self-stretch gap-4 col-span-full row-start-2">
      <form className="mt-14 mx-4 text-center h-auto">
        <label>Body: </label>
        <br />
        <Textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
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
