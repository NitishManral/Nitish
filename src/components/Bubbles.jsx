import React from 'react';
// import '../styles/Bubbles.css';
import { useState, useEffect } from 'react';

const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);
  useEffect(() => {
    const colors = ['#005874', '#1C819E', '#FFBE00', '#36BA98', '#E9C46A','#F4A261', '#FF7F3E', '#597445', '#A0937D', '#8E7AB5','#973131','#EE4E4E', '#06D001'] ;
    const interval = setInterval(() => {
      const id = Math.random();
      setBubbles((bubbles) => [
        ...bubbles,
        {
          id: id, 
          left: Math.random() * 100, 
          size: Math.random() * 10 + 5, 
          borderColor: colors[Math.floor(Math.random() * colors.length)],
        },
      ]);

      setTimeout(() => {
        setBubbles((bubbles) => bubbles.filter((bubble) => bubble.id !== id));
      }, 9000); 
    }, 700); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className='bubble'
            style={{ 
              left: `${bubble.left}%`, 
              borderColor: bubble.borderColor, 
              width: `${bubble.size}px`, 
              height: `${bubble.size}px` 
            }}
          />
        ))}
    </>
      
    );
};

export default Bubbles;