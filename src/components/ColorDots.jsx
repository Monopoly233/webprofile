import React, { useState, useEffect, useRef } from 'react';
import '../styles/ColorDots.css';

const ColorDots = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
  const rows = 7;
  const cols = 21;
  const totalDots = rows * cols;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({
          width: rect.width,
          height: rect.height
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
      handleResize(); // 初始化尺寸
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const calculateStretch = (dotX, dotY) => {
    const dx = mousePosition.x - dotX;
    const dy = mousePosition.y - dotY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 200;
    const stretchFactor = Math.min(distance / maxDistance, 1);
    
    return {
      scaleX: 1 + stretchFactor * 3,
      scaleY: 1 - stretchFactor * 0.5,
      rotate: Math.atan2(dy, dx) * (180 / Math.PI)
    };
  };

  return (
    <div className="color-dots-container" ref={containerRef}>
      {Array.from({ length: totalDots }).map((_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const color = colors[col % colors.length];
        
        // 计算点的位置，使其从容器左上角开始
        const dotX = (containerSize.width / (cols - 1)) * col;
        const dotY = (containerSize.height / (rows - 1)) * row;
        
        const { scaleX, scaleY, rotate } = calculateStretch(dotX, dotY);
        
        return (
          <div
            key={index}
            className="color-dot"
            style={{
              backgroundColor: color,
              left: dotX,
              top: dotY,
              transform: `rotate(${rotate}deg) scale(${scaleX}, ${scaleY})`,
              transformOrigin: 'center'
            }}
          />
        );
      })}
    </div>
  );
};

export default ColorDots; 