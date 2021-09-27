import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory, Link } from 'react-router-dom';
import baseUrl from '../const';
import Button from './Button';

// import './PostDetails.css';
import Layout from './Layout';
import Comments from './Comments';
import CommentForm from './CommentForm';

const PostDetails = (props) => {
  const [postDetails, setPostDetails] = useState(null);
  const { id } = useParams();
  const history = useHistory();
  const [loadComments, setLoadComments] = useState(false);
  const [comments, setComments] = useState([]);

  const deletePost = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user'),
      },
      body: JSON.stringify({
        post: id,
      }),
    };
    fetch(baseUrl + '/posts/' + id, requestOptions).then(() => {
      history.push('/');
    });
  };

  useEffect(() => {
    const fetchPostDetails = async () => {
      const response = await fetch(baseUrl + '/posts/' + id, {
        mode: 'cors',
      });
      const data = await response.json();
      const item = data.post;
      setPostDetails(item);
    };
    fetchPostDetails();
  }, [id]);

  return (
    <Layout authState={props.authState}>
      <div className="display: grid auto-rows-min auto-rows-auto row-start-2 col-span-full mx-4">
        <div className="display: grid grid-rows-postTitle">
          <div className="row-start-1 place-self-center col-span-full text-2xl text-center display: grid">
            <h2 className="row-start-1 place-self-center text-3xl text-green-900">
              {postDetails ? postDetails.title : ''}
            </h2>
            <div>
              <div className="space-x-3">
                <Link to={useLocation().pathname + '/edit'}>
                  <Button value="Edit" color="green" />
                </Link>
                <Button value="Delete" color="green" onClick={deletePost} />
              </div>
            </div>
          </div>
          <div className="overflow-hidden h-postCoverPhoto rounded-md">
            <img
              src={
                postDetails
                  ? baseUrl + '/uploads/' + postDetails.coverPhoto
                  : ''
              }
              alt="Post Cover"
            />
          </div>
          <p className="mx-2 p-smd"> {postDetails ? postDetails.body : ''}</p>
        </div>
        <CommentForm
          authState={props.authState}
          userId={props.userId}
          loadComments={() => setLoadComments(!loadComments)}
          setComments={() => setComments([])}
          comments={comments}
        />
        <Comments
          postid={id}
          loadComments={loadComments}
          setComments={(state) => setComments(state)}
          comments={comments}
        />
      </div>
    </Layout>
  );
};

export default PostDetails;
