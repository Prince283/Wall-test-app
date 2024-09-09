import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import DraggableButton from './components/DraggableButton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Touch Wall App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </main>
        <div className="button-container">
          <DraggableButton />
        </div>
      </div>
    </Router>
  );
}

export default App;
