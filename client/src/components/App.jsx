import React from 'react';
import axios from 'axios';

const App = () => {
  const handleLogout = function() {
    axios.post('/logout', {});
  };

  return (
    <div>
      <h1>Rendering</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default App;
