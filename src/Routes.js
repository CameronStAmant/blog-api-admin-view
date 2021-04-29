import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import PostDetails from './components/PostDetails';
import PostForm from './components/PostForm';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/posts/:id" component={PostDetails} />
        <Route exact path="/posts/:id/edit" component={PostForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
