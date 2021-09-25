import Layout from './Layout';
import { useParams, Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import baseUrl from '../const';
import CommentForm from './CommentForm';

const CommentEditPage = (props) => {
  return (
    <Layout authState={props.authState}>
      <CommentForm
        authState={props.authState}
        userId={props.userId}
        loadComments={() => props.setLoadComments(!props.loadComments)}
        setComments={() => props.setComments([])}
        comments={props.comments}
      />
    </Layout>
  );
};

export default CommentEditPage;
