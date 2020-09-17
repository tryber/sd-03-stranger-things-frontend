import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      <h1>{process.env.ENVIROMENT}</h1>
      <StrangerThings />
    </div>
  );
}

export default App;
