import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import baseUrl from '../const';
import ArticleCard from './ArticleCard';
import Button from './Button';

const Home = (props) => {
  const [posts, setPosts] = useState(null);
  const [refresh, setRefresh] = useState(false);

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
            <ArticleCard post={post} />
            <div className="bg-white justify-end px-4 pt-1 -mt-1 rounded-br-md relative">
              {post.published.toString() === 'true' && (
                <Button
                  value="Published"
                  color="green"
                  addonClasses={'absolute right-5 -top-8'}
                  onClick={(e) => handleSubmit(e, post)}
                />
              )}
              {post.published.toString() === 'false' && (
                <Button
                  value="Unpublished"
                  color="red"
                  addonClasses={'absolute right-5 -top-8'}
                  onClick={(e) => handleSubmit(e, post)}
                />
              )}
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
      <div className="grid grid-rows-home row-start-2 mx-4">
        <div className="flex flex-col text-2xl font-semibold text-center">
          <h2 className="place-self-center text-3xl text-green-900">
            Welcome to the blog!
          </h2>
          <div>
            <Link to="/posts/new">
              <Button value="New Post" color="green" />
            </Link>
          </div>
        </div>
        <ul className="grid md:grid-cols-2 auto-rows-min lg:grid-cols-3 gap-4">
          {posts ? posts : ''}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
