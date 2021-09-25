import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import baseUrl from '../const';
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
          <p>
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
              <button
                type="button"
                className="border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-auto active:bg-green-400 active:border-green-400 shadow-sm"
              >
                Edit
              </button>
            </Link>

            <button
              type="button"
              className="border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-auto active:bg-green-400 active:border-green-400 shadow-sm"
              onClick={(e) => handleDelete(e, comment._id)}
            >
              Delete
            </button>
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
