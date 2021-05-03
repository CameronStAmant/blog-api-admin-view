import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const handleDelete = (commentId) => {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(
        'http://localhost:3000/posts/' +
          props.postid +
          '/comments/' +
          commentId,
        requestOptions
      );
    };

    const fetchComments = async () => {
      const response = await fetch(
        'http://localhost:3000/posts/' + props.postid + '/comments',
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
            <p className="commentTimestamp">{comment.timestamp}</p>
            <p className="commentBody">{comment.body}</p>
            <div className="modifyComment">
              <form
                action={
                  '/posts/' +
                  props.postid +
                  '/comments/' +
                  comment._id +
                  '/edit'
                }
              >
                <input type="submit" value="Edit" />
              </form>
              <form onSubmit={() => handleDelete(comment._id)}>
                <input type="submit" value="Delete" />
              </form>
            </div>

            <br />
          </div>
        );
        setComments((comments) => [...comments, element]);
      }
    };
    fetchComments();
  }, [props.postid]);
  return (
    <div>
      <div>{comments}</div>
    </div>
  );
};

export default Comments;
