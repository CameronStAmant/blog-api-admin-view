import React, { useState, useEffect } from 'react';
import './Home.css';
import Layout from './Layout';

const Home = (props) => {
  const [posts, setPosts] = useState(null);
  const [refresh, setRefresh] = useState(false);

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
            <a href={post.url}>{post.title}</a>
            <div>
              <p>Published: {post.published.toString()}</p>
              <form onSubmit={(e) => handleSubmit(e, post)}>
                <input type="submit" value="Toggle" />
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
          <form action="/posts/new">
            <input type="submit" value="New Post" />
          </form>
        </div>
        <ul className="postIndex">{posts ? posts : ''}</ul>
      </div>
    </Layout>
  );
};

export default Home;
