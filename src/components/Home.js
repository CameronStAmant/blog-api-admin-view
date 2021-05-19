import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './Home.css';
import Layout from './Layout';

const Home = (props) => {
  const [posts, setPosts] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const history = useHistory();

  const handleSubmit = (e, post) => {
    e.preventDefault();
    const requestOptions = {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user'),
      },
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        published: !post.published,
      }),
    };
    fetch(
      'https://serene-waters-04286.herokuapp.com/posts/' + post.id,
      requestOptions
    ).then((results) => {
      setRefresh(!refresh);
    });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://serene-waters-04286.herokuapp.com/posts',
        {
          mode: 'cors',
        }
      );
      const data = await response.json();
      const item = data.posts;
      const listPosts = item.map((post) => {
        return (
          <li key={post.title} className="postDetails">
            <Link to={'/posts/' + post.id}>{post.title}</Link>
            <div>
              <p>Published: {post.published.toString()}</p>
              <form onSubmit={(e) => handleSubmit(e, post)}>
                <input type="submit" id="togglePublish" value="Toggle" />
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
      <div className="mainContentHome">
        <div className="homeBanner">
          <p>Welcome to the blog admin site!</p>
          <Link to="/posts/new">
            <button type="button">New Post</button>
          </Link>
        </div>
        <ul className="postIndex">{posts ? posts : ''}</ul>
      </div>
    </Layout>
  );
};

export default Home;
