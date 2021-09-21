import Layout from './Layout';
import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';

const PostForm = (props) => {
  const [postTitle, setPostTitle] = useState(null);
  const [postBody, setPostBody] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [newUrl, setNewUrl] = useState(null);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === undefined) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('user'),
        },
        body: JSON.stringify({
          author: props.userId,
          title: postTitle,
          body: postBody,
        }),
      };
      fetch(baseUrl + '/posts/', requestOptions)
        .then((response) => response.json())
        .then((results) => {
          return setNewUrl(results.url);
        })
        .catch((error) => {
          console.log('The fetch error is: ' + error);
        });
    } else {
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('user'),
        },
        body: JSON.stringify({ title: postTitle, body: postBody }),
      };
      fetch(baseUrl + '/posts/' + id, requestOptions).then(() =>
        setRedirect(true)
      );
    }
  };

  useEffect(() => {
    if (id === undefined) {
    } else {
      const fetchPostDetails = async () => {
        const response = await fetch(baseUrl + '/posts/' + id + '/edit', {
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('user'),
          },
        });
        const data = await response.json();
        const item = data.post;
        setPostTitle(item.title);
        setPostBody(item.body);
      };
      fetchPostDetails();
    }
  }, [id]);

  return (
    <Layout authState={props.authState}>
      {newUrl !== null && <Redirect to={newUrl} />}
      {redirect === true && newUrl === null && (
        <Redirect from="/posts/:id/edit" to={'/posts/' + id} />
      )}
      <div className="justify-self-stretch col-span-full row-start-2 h-full">
        <form className="mt-14 mx-2 text-center" onSubmit={handleSubmit}>
          <label>Title: </label>
          <br />
          <input
            className="box-border border-2 shadow-sm rounded-md gap-4 border-green-200 auto-rows-min w-full"
            type="text"
            name="title"
            value={postTitle ? postTitle : ''}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
          <br />
          <label>Body: </label>
          <br />
          <textarea
            className="box-border border-2 shadow-sm rounded-md gap-4 border-green-200 auto-rows-min w-full h-screen"
            rows="20"
            name="body"
            value={postBody ? postBody : ''}
            onChange={(e) => setPostBody(e.target.value)}
            required
          />
          <br />
          <input
            type="submit"
            className="border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-2/6 active:bg-green-400 active:border-green-400 shadow-sm"
            value="Submit"
          />
        </form>
      </div>
    </Layout>
  );
};

export default PostForm;
