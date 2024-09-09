import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './Game.css';

function Game() {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Load saved position from localStorage
    const savedPosition = localStorage.getItem('buttonPosition');
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);

  const handleButtonPress = () => {
    setScore(score + 1);
    // Save position to localStorage when "Touch Me" button is clicked
    localStorage.setItem('buttonPosition', JSON.stringify(position));
  };

  const handleStop = (e, ui) => {
    // Update position when dragging stops
    const { x, y } = ui;
    setPosition({ x, y });
  };

  return (
    <div className="game-container">
      <h1>Touch the Button!</h1>
      <Draggable
        position={position}
        onStop={handleStop}
      >
        <button className="large-button">
          Move Me
        </button>
      </Draggable>
      <button className="touch-me-button" onClick={handleButtonPress}>
        Touch Me
      </button>
      <p>Your Score: {score}</p>
      <p>Button Position: x: {position.x}, y: {position.y}</p>
    </div>
  );
}

export default Game;
