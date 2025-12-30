import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DeviceView from './DeviceView';

const App = () => {
  const [ user, setUser ] = useState({ name: '' });

  useEffect(() => {
    axios.get('/user')
      .then(({ data }) => {
        setUser({ name: data });
      })
      .catch(err => {
        console.error('Could not get user from client: ', err);
      });
  }, []);

  const handleLogout = function() {
    axios.post('/logout', {})
      .then(() => {
        setUser({ name: '' });
      })
      .catch(err => {
        console.error('Could not post from client: ', err);
      });
  };

  const renderAuthData = () => {
    if (name) {
      return (
        <div>
          <h2>{`Currently logged in as ${name}`}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (<div>
        <h1>Not signed in</h1>
        <a className="button google" href="/login/federated/google">Sign in with Google</a>
      </div>);
    }
  };

  const { name } = user;
  return (
    <div>
      {renderAuthData()}
      <DeviceView user={user}/>
    </div>
  );
};

export default App;
