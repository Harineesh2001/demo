import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SampleProps from './SampleProps';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      // Redirect to another component/page
      setLoggedIn(true);
      history.push('/dashboard');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {loggedIn && <LoggedInComponents />}
    </div>
  );
};

const LoggedInComponents = () => {
  return (
    <div>
      <h2>Dashboard</h2>
     {<SampleProps/>}
    </div>
  );
};

export default LoginPage;
