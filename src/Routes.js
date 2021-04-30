import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import PostDetails from './components/PostDetails';
import PostForm from './components/PostForm';
import CommentForm from './components/CommentForm';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/posts/:id" component={PostDetails} />
        <Route exact path="/posts/:id/edit" component={PostForm} />
        <Route
          exact
          path="/posts/:id/comments/:commentId/edit"
          component={CommentForm}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
