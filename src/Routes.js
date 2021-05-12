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
      fetch('https://serene-waters-04286.herokuapp.com/auth', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((results) => {
          setAuth(results.response);
          setUserId(results.userId);
          setRefresh(false);
        });
    } else {
      setAuth(false);
      setUserId(null);
      setRefresh(false);
    }
  };

  useEffect(() => {
    authChecker();
  }, [refresh]);

  return (
    <BrowserRouter forceRefresh>
      {!auth && !localStorage.getItem('user') && (
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Login authRefresh={(state) => setRefresh(state)} />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <Login authRefresh={(state) => setRefresh(state)} />
              )}
            />
            <Redirect to={'/login'} />
          </Switch>
        </div>
      )}
      <Switch>
        <Route exact path="/" render={() => <App authState={auth} />} />
        <Route
          exact
          path="/login"
          render={() => <Login authRefresh={(state) => setRefresh(state)} />}
        />
        <Route
          exact
          path="/logout"
          render={() => (
            <Logout
              authState={auth}
              authRefresh={(state) => setRefresh(state)}
            />
          )}
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
