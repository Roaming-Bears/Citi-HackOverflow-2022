import React, { useState, useEffect } from 'react'
i
import animations from './components/questionnaire.js'
import Bankers from "./Bankers"

function App() {

  return (
    <div className='App'>
      <Bankers />
      <animations />
    </div>
  );
}

export default App;
