import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      {process.env.ENVIROMENT ? <h1>Em desenvolvimento</h1>: null}
      <StrangerThings />
    </div>
  );
}

export default App;
