import Layout from './Layout';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import baseUrl from '../const';

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
    <div className="bg-gray-600 min-h-screen">
      <Layout>
        <div className="grid place-content-center">
          <form onSubmit={handleSubmit} className="text-center">
            <label htmlFor="username-field">Username:</label>
            <br />
            <input
              className="
              input
              w-48
              border-2
              border-green-200
              rounded-md 
              focus:border-green-500"
              type="text"
              id="username-field"
              name="username"
              autoComplete="on"
              value={username ? username : ''}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <label htmlFor="password-field">Password:</label>
            <br />
            <input
              className="
              input
              w-48
              border-2
             border-green-200
              rounded-md 
              focus:border-green-500"
              type="password"
              id="password-field"
              name="password"
              autoComplete="on"
              value={password ? password : ''}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <input
              className="
              bg-green-100
              rounded-md
              mt-2
              w-48
             hover:bg-green-200
              cursor-pointer"
              type="submit"
              id="loginButton"
              value="Login"
            />
            {errorMessage && <p className="row-start-4">{errorMessage}</p>}
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
