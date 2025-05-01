import React, { useEffect, useState } from 'react';
import '../styles/cursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // 延迟更新跟随光标位置
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
      <div
        className={`cursor-follower ${isClicked ? 'clicked' : ''}`}
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor; 