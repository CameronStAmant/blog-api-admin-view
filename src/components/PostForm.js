import Layout from './Layout';
import { useParams, Link, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';
import Button from './Button';
import Textarea from './Textarea';
import Input from './Input';

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
        setPostTitle(item.title);
        setPostCoverPhoto(item.coverPhoto);
        setCoverPhotoURL(item.coverPhoto);
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
        <form className="mx-4 text-center">
          <label>Title</label>
          <Input
            type="text"
            name="title"
            value={postTitle ? postTitle : ''}
            onChange={(e) => setPostTitle(e.target.value)}
            addonClasses="w-full rounded-md"
          />
          <label>Cover photo</label>
          {coverPhotoURL && (
            <div>
              <div className="overflow-hidden h-postCoverPhoto mb-2">
                <img src={coverPhotoURL} alt="Cover" />
              </div>
              <Button
                value="Remove Image"
                color="green"
                onClick={(e) => coverPhotoTernary(e)}
              />
            </div>
          )}
          <div className="mb-2">
            {coverPhotoURL === null && (
              <Input
                type="file"
                name="coverPhoto"
                id="coverPhoto"
                onChange={(e) => coverPhotoTernary(e)}
                addonClasses="border-none shadow-none m-auto"
              />
            )}
          </div>
          <label>Body</label>
          <Textarea
            value={postBody ? postBody : ''}
            onChange={(e) => setPostBody(e.target.value)}
          />
          <div className="space-x-3">
            {id === undefined && (
              <Link to="/">
                <Button value="Cancel" color="green" />
              </Link>
            )}
            {id !== undefined && (
              <Link to={'/posts/' + id}>
                <Button value="Cancel" color="green" />
              </Link>
            )}
            <Button value="Submit" color="green" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PostForm;
