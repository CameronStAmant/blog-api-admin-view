import React, { useState, useEffect } from 'react';
import './Home.css';
import Layout from './Layout';

const Home = (props) => {
  const [posts, setPosts] = useState(null);

  const handleSubmit = (post) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        published: !post.published,
      }),
    };
    fetch('http://localhost:3000/posts/' + post.id, requestOptions);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:3000/posts', {
        mode: 'cors',
      });
      const data = await response.json();
      const item = data.posts;
      const listPosts = item.map((post) => {
        return (
          <li key={post.title} className="postDetails">
            <a href={post.url}>{post.title}</a>
            <div>
              <p>Published: {post.published.toString()}</p>
              <form onSubmit={() => handleSubmit(post)}>
                <input type="submit" value="Toggle" />
              </form>
            </div>
          </li>
        );
      });
      setPosts(listPosts);
    };
    fetchPosts();
  }, []);

  return (
    <Layout authState={props.authState}>
      <div className="mainContent">
        <div className="homeBanner">
          {props.authState && <p>logged in!</p>}
          <p>Welcome to the tree blog admin site!</p>
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
