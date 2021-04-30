import React, { useState, useEffect } from 'react';
import './Home.css';
import Layout from './Layout';

const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:3000/posts', {
        mode: 'cors',
      });
      const data = await response.json();
      const item = data.posts;
      const listPosts = item.map((post) => {
        console.log(post);
        return (
          <li key={post.title} className="postDetails">
            <a href={post.url}>{post.title}</a>
            <p>Published: {post.published.toString()}</p>
          </li>
        );
      });
      setPosts(listPosts);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <div className="mainContent">
        <div className="homeBanner">Welcome to the tree blog!</div>
        <ul className="postIndex">{posts ? posts : ''}</ul>
      </div>
    </Layout>
  );
};

export default Home;
