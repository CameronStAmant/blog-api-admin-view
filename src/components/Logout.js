import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
  useEffect(() => {
    window.localStorage.removeItem('user');
    props.authRefresh(true);
  });

  return <Redirect to={'/'} />;
};

export default Logout;
