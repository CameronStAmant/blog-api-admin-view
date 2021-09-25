import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import baseUrl from '../const';
import Button from './Button';

const { DateTime } = require('luxon');

const Comments = (props) => {
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
      baseUrl + '/posts/' + props.postid + '/comments/' + commentId,
      requestOptions
    ).then(() => {
      fetchComments();
    });
  };

  const fetchComments = async () => {
    const response = await fetch(
      baseUrl + '/posts/' + props.postid + '/comments',
      {
        mode: 'cors',
      }
    );
    const data = await response.json();
    let array = [];
    for (const comment of data.comments) {
      let element;
      element = (
        <div
          className="box-border border-solid shadow-md p-4 grid gap-2 auto-rows-min border-2 border-green-200 rounded-md"
          id={comment._id}
          key={comment._id}
        >
          <h4>{comment.author.username}</h4>
          <p className="italic text-sm">
            {DateTime.fromISO(comment.timestamp).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </p>
          <p className="row-start-2">{comment.body}</p>
          <div className="space-x-3">
            <Link
              to={
                '/posts/' + props.postid + '/comments/' + comment._id + '/edit'
              }
            >
              <Button value="Edit" color="green" />
            </Link>
            <Button
              value="Delete"
              color="green"
              onClick={(e) => handleDelete(e, comment._id)}
            />
          </div>
        </div>
      );

      array = [...array, element];
      props.setComments(array);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [props.loadComments]);
  return <div className="justify-self-stretch my-14">{props.comments}</div>;
};

export default Comments;
