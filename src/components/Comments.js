import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  const handleDelete = (commentId) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    console.log(commentId);
    fetch(
      'http://localhost:3000/posts/' + props.postid + '/comments/' + commentId,
      requestOptions
    );
  };

  useEffect(() => {
    // const fetchPost = async () => {
    //   const post = Post.findById(props.id).exec();
    //   console.log(post);
    // };
    // fetchPost();
    const fetchComments = async () => {
      const response = await fetch(
        'http://localhost:3000/posts/' + props.postid + '/comments',
        {
          mode: 'cors',
        }
      );
      const data = await response.json();

      for (const comment of data.comments) {
        const element = (
          <div className="commentLayout">
            <h4 className="commentAuthor">{comment.author.username}</h4>
            <p className="commentTimestamp">{comment.timestamp}</p>
            <p className="commentBody">{comment.body}</p>
            <form
              className="modifyComment"
              onSubmit={() => handleDelete(comment._id)}
            >
              <input type="submit" value="Delete" />
            </form>
            <br />
          </div>
        );
        setComments((comments) => [...comments, element]);
      }
    };
    fetchComments();
  }, []);
  return (
    <div>
      <div>{comments}</div>
    </div>
  );
};

export default Comments;
