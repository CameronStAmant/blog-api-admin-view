import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory, Link } from 'react-router-dom';
import baseUrl from '../const';

// import './PostDetails.css';
import Layout from './Layout';
import Comments from './Comments';

const PostDetails = (props) => {
  const [postDetails, setPostDetails] = useState(null);
  const { id } = useParams();
  const history = useHistory();

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
                  onClick={deletePost}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden h-postCoverPhoto">
            <img
              src={
                postDetails
                  ? baseUrl + '/uploads/' + postDetails.coverPhoto
                  : ''
              }
              alt="Post Cover"
            />
          </div>
          <p className="mx-2 px-1"> {postDetails ? postDetails.body : ''}</p>
        </div>
        <Comments postid={id} />
      </div>
    </Layout>
  );
};

export default PostDetails;
