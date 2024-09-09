import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './DraggableButton.css';

function DraggableButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Retrieve saved position from localStorage
    const savedPosition = localStorage.getItem('buttonPosition');
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);

  useEffect(() => {
    // Save position to localStorage whenever it changes
    localStorage.setItem('buttonPosition', JSON.stringify(position));
  }, [position]);

  const handleDrag = (e, ui) => {
    // Update position while dragging
    const { x, y } = ui;
    setPosition({ x, y });
  };  

  return (
    <div>
      <Draggable
        onDrag={handleDrag}
        position={position}
      >
        <button className="draggable-button">
          Move Me
        </button>
      </Draggable>
    </div>
  );
}

export default DraggableButton;
