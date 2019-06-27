import React from 'react';
import './App.css';
import './MemoryCard.css'
import MemoryCard from './MemoryCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Memory Game</h1>
          <p className="p-subtitle">Match cards to win</p>
      </header>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
    </div>
  );
}

export default App;
