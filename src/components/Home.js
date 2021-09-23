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
            className="display: grid box-border border-2 shadow-sm rounded-md gap-4 border-green-200 mx-2 auto-rows-min"
          >
            <Link to={'/posts/' + post.id}>
              <img
                src={post ? baseUrl + '/uploads/' + post.coverPhoto : ''}
                alt="Post Cover"
              />
              <p className="m-14 text-center text-xl font-semibold">
                {post.title}
              </p>
            </Link>
            <div className="display: grid mb-8">
              <p>Published: {post.published.toString()}</p>
              <form onSubmit={(e) => handleSubmit(e, post)}>
                <input
                  className="border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-2/6 active:bg-green-400 active:border-green-400 shadow-sm"
                  type="submit"
                  id="togglePublish"
                  value="Toggle"
                />
              </form>
            </div>
          </li>
        );
      });
      setPosts(listPosts);
    };
    fetchPosts();
  }, [refresh]);

  return (
    <Layout authState={props.authState}>
      <div className="display: grid grid-rows-home auto-rows-min row-start-2 col-span-full">
        <div className="row-start-1 place-self-center min-h-px col-span-full text-2xl font-semibold text-center">
          <h2>Welcome to the blog admin site!</h2>
          <Link to="/posts/new">
            <button
              type="button"
              className="border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 w-2/6 active:bg-green-400 active:border-green-400 shadow-sm"
            >
              New Post
            </button>
          </Link>
        </div>
        <ul className="display: grid grid-flow-row md:grid-cols-2 row-start-2 lg:grid-cols-3 col-span-full gap-y-4 h-full text-center auto-rows-min">
          {posts ? posts : ''}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
