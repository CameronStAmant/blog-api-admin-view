import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
  useEffect(() => {
    props.authRefresh(true);
    window.localStorage.removeItem('user');
  }, []);

  return <div>{!props.authState && <Redirect to={'/login'} />}</div>;
};

export default Logout;
