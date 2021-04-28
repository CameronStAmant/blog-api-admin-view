import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = (props) => {
  const [comments, setComments] = useState([]);

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
