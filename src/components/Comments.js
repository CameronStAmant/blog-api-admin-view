import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Comments.css';
const { DateTime } = require('luxon');

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [reloadComments, setReloadComments] = useState(false);

  const handleDelete = (e, commentId) => {
    e.preventDefault();
    const requestOptions = {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user'),
      },
    };
    fetch(
      'https://serene-waters-04286.herokuapp.com/posts/' +
        props.postid +
        '/comments/' +
        commentId,
      requestOptions
    ).then(() => {
      setComments([]);
      setReloadComments(!reloadComments);
    });
  };

  const fetchComments = async () => {
    const response = await fetch(
      'https://serene-waters-04286.herokuapp.com/posts/' +
        props.postid +
        '/comments',
      {
        mode: 'cors',
      }
    );
    const data = await response.json();
    for (const comment of data.comments) {
      let element;
      element = (
        <div className="commentLayout" id={comment._id} key={comment._id}>
          <h4 className="commentAuthor">{comment.author.username}</h4>
          <p className="commentTimestamp">
            {DateTime.fromISO(comment.timestamp).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </p>
          <p className="commentBody">{comment.body}</p>
          <div className="modifyComment">
            <Link
              to={
                '/posts/' + props.postid + '/comments/' + comment._id + '/edit'
              }
            >
              <button type="button">Edit</button>
            </Link>
            <form onSubmit={(e) => handleDelete(e, comment._id)}>
              <input type="submit" value="Delete" />
            </form>
          </div>

          <br />
        </div>
      );
      setComments((comments) => [...comments, element]);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [reloadComments]);
  return <div className="Comment">{comments}</div>;
};

export default Comments;
