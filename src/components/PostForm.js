import Layout from './Layout';
import { useParams, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';

const PostForm = (props) => {
  const [postTitle, setPostTitle] = useState(null);
  const [postCoverPhoto, setPostCoverPhoto] = useState(null);
  const [coverPhotoURL, setCoverPhotoURL] = useState(null);
  const [postBody, setPostBody] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [newUrl, setNewUrl] = useState(null);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === undefined) {
      const formData = new FormData();
      formData.append('author', props.userId);
      formData.append('title', postTitle);
      formData.append('body', postBody);
      formData.append('coverPhoto', postCoverPhoto);

      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('user'),
        },
        body: formData,
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
      const formData = new FormData();
      formData.append('title', postTitle);
      formData.append('body', postBody);
      formData.append('coverPhoto', postCoverPhoto);

      const requestOptions = {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('user'),
        },
        body: formData,
      };
      fetch(baseUrl + '/posts/' + id, requestOptions).then(() =>
        setRedirect(true)
      );
    }
  };

  const coverPhotoTernary = (e) => {
    e.preventDefault();
    if (coverPhotoURL === null) {
      setPostCoverPhoto(e.target.files[0]);
      setCoverPhotoURL(URL.createObjectURL(e.target.files[0]));
    } else {
      setCoverPhotoURL(null);
    }
  };

  useEffect(() => {
    if (id === undefined) {
    } else {
      const fetchPostDetails = async () => {
        const response = await fetch(baseUrl + '/posts/' + id + '/edit', {
          mode: 'cors',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('user'),
          },
        });
        const data = await response.json();
        const item = data.post;
        console.log(item);
        setPostTitle(item.title);
        setPostCoverPhoto(item.coverPhoto);
        setCoverPhotoURL(baseUrl + '/uploads/' + item.coverPhoto);
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
        <form className="mx-4 text-center" onSubmit={handleSubmit}>
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
          <label>Cover photo</label>
          <br />
          {coverPhotoURL && (
            <div>
              <img src={coverPhotoURL} alt="Cover" />
              <button onClick={(e) => coverPhotoTernary(e)}>
                Remove Image
              </button>
            </div>
          )}
          {coverPhotoURL === null && (
            <input
              className=""
              type="file"
              name="coverPhoto"
              id="coverPhoto"
              onChange={(e) => coverPhotoTernary(e)}
              required
            />
          )}

          <br />
          <label>Body: </label>
          <br />
          <textarea
            className="box-border border-2 shadow-sm rounded-md gap-4 border-green-200 auto-rows-min w-full"
            rows="12"
            name="body"
            value={postBody ? postBody : ''}
            onChange={(e) => setPostBody(e.target.value)}
            required
          />
          <br />
          <input
            type="submit"
            className="border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 active:bg-green-400 active:border-green-400 shadow-sm"
            value="Submit"
          />
        </form>
      </div>
    </Layout>
  );
};

export default PostForm;
