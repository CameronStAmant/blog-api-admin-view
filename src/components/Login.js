import Layout from './Layout';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import baseUrl from '../const';
import Button from './Button';
import Input from './Input';

const Login = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        adminSite: true,
      }),
    };
    fetch(baseUrl + '/login', requestOptions)
      .then((response) => response.json())
      .then((results) => {
        if (results.token !== undefined) {
          window.localStorage.setItem('user', results.token);
          props.authRefresh(true);
          history.push('/');
        } else {
          setErrorMessage(results.message);
        }
      });
  };

  return (
    <Layout>
      <div className="grid place-content-center">
        <form onSubmit={handleSubmit} className="text-center">
          <label htmlFor="username-field">Username:</label>
          <br />
          <Input
            type="text"
            id="username-field"
            name="username"
            value={username ? username : ''}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password-field">Password:</label>
          <br />
          <Input
            type="password"
            id="password-field"
            name="password"
            value={password ? password : ''}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button type={'submit'} value={'Login'} />
          {errorMessage && <p className="row-start-4">{errorMessage}</p>}
        </form>
      </div>
    </Layout>
  );
};

export default Login;
