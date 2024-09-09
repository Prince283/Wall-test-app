import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Interactive Wall</h1>
      <Link to="/game">
        <button className="large-button">Start the Game</button>
      </Link>
    </div>
  );
}

export default Home;
