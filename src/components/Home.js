import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Layout from './Layout';
import baseUrl from '../const';

const Home = (props) => {
  const [posts, setPosts] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const history = useHistory();

  const handleSubmit = (e, post) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('body', post.body);
    formData.append('published', !post.published);
    formData.append('coverPhoto', post.coverPhoto);

    const requestOptions = {
      method: 'PUT',
      mode: 'cors',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('user'),
      },
      body: formData,
    };
    fetch(baseUrl + '/posts/' + post.id, requestOptions).then((results) => {
      setRefresh(!refresh);
    });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(baseUrl + '/posts', {
        mode: 'cors',
      });
      const data = await response.json();
      const item = data.posts;
      const listPosts = item.map((post) => {
        return (
          <li
            key={post.title}
            className="box-border shadow-sm rounded-md h-full"
          >
            <Link to={'/posts/' + post.id}>
              <div className="grid auto-rows-post">
                <div className="overflow-hidden h-postCoverPhoto">
                  <img
                    className="w-full rounded-tl-md rounded-tr-md"
                    src={post ? baseUrl + '/uploads/' + post.coverPhoto : ''}
                    alt="Post Cover"
                  />
                </div>
                <div className="flex">
                  <div className="text-3xl font-semibold flex-grow px-4 rounded-bl-md  bg-white -mt-1 pb-1">
                    {post.title}
                  </div>
                  <div className="bg-white justify-end px-4 pt-1 -mt-1 rounded-br-md">
                    {post.published.toString() === 'true' && (
                      <form onSubmit={(e) => handleSubmit(e, post)}>
                        <input
                          className="border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 active:bg-green-400 active:border-green-400 shadow-sm"
                          type="submit"
                          id="togglePublish"
                          value="Published"
                        />
                      </form>
                    )}
                    {post.published.toString() === 'false' && (
                      <form onSubmit={(e) => handleSubmit(e, post)}>
                        <input
                          className="border-solid border-4 border-red-200 rounded-md bg-red-200 hover:bg-red-300 hover:border-red-300 active:bg-red-400 active:border-red-400 shadow-sm"
                          type="submit"
                          id="togglePublish"
                          value="Unpublished"
                        />
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      });
      setPosts(listPosts);
    };
    fetchPosts();
  }, [refresh]);

  return (
    <Layout authState={props.authState}>
      <div className="grid grid-rows-home row-start-2 mx-4">
        <div className="flex flex-col text-2xl font-semibold text-center">
          <h2 className="place-self-center text-3xl text-green-900">
            Welcome to the blog!
          </h2>
          <Link to="/posts/new">
            <button
              type="button"
              className="border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 active:bg-green-400 active:border-green-400 shadow-sm"
            >
              New Post
            </button>
          </Link>
        </div>
        <ul className="grid md:grid-cols-2 auto-rows-min lg:grid-cols-3 gap-4">
          {posts ? posts : ''}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
