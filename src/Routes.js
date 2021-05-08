import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Logout from './components/Logout';
import PostDetails from './components/PostDetails';
import PostForm from './components/PostForm';
import CommentForm from './components/CommentForm';

const Routes = () => {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const authChecker = () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user'),
      },
    };
    if (localStorage.getItem('user')) {
      fetch('http://localhost:3000/auth', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((results) => {
          setAuth(results.response);
          setUsername(results.username);
          setUserId(results.userId);
          setRefresh(false);
        });
    } else {
      setAuth(false);
      setUsername(null);
      setUserId(null);
      setRefresh(false);
    }
  };

  useEffect(() => {
    authChecker();
  }, [refresh]);

  return (
    <BrowserRouter>
      <Switch>
        {!auth && refresh && (
          <div>
            <Route exact path="/" render={() => <App authState={auth} />} />
            <Route
              exact
              path="/login"
              render={() => (
                <Login authRefresh={(state) => setRefresh(state)} />
              )}
            />
            <Redirect to={'/login'} />
          </div>
        )}
        <Route exact path="/" render={() => <App authState={auth} />} />
        <Route
          exact
          path="/login"
          render={() => <Login authRefresh={(state) => setRefresh(state)} />}
        />
        <Route
          exact
          path="/logout"
          render={() => <Logout authRefresh={(state) => setRefresh(state)} />}
        />
        <Route
          exact
          path="/posts/new"
          render={() => <PostForm authState={auth} userId={userId} />}
        />
        <Route
          exact
          path="/posts/:id"
          render={() => <PostDetails authState={auth} />}
        />
        <Route
          exact
          path="/posts/:id/edit"
          render={() => <PostForm authState={auth} />}
        />
        <Route
          exact
          path="/posts/:id/comments/:commentId/edit"
          render={() => <CommentForm authState={auth} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
