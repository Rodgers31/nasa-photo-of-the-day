import React from "react";
import "./App.css";
//import React, { useState, useEffect } from 'react';
import Web from './Web'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h1>Picture from NASA</h1>
     <Web />
    </div>
  );
}

export default App;
