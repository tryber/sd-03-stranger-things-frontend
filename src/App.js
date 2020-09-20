import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      <StrangerThings />
      {process.env.DEVELOPMENT_MODE ? <h1>Em desenvolvimento</h1> : null}
    </div>
  );
}

export default App;
