import React, { useState, useEffect, useRef } from 'react';
import '../styles/ColorDots.css';

const ColorDots = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);
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
      container.addEventListener('mouseenter', () => setIsHovered(true));
      container.addEventListener('mouseleave', () => setIsHovered(false));
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsHovered(true));
        container.removeEventListener('mouseleave', () => setIsHovered(false));
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const calculateLine = (dotX, dotY) => {
    if (!isHovered) return { width: '0px', opacity: 0 };
    
    const dx = mousePosition.x - dotX;
    const dy = mousePosition.y - dotY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 200;
    const stretchFactor = Math.min(distance / maxDistance, 1);
    
    // 使用更平滑的角度计算方法
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    angle = angle % 360; // 确保角度在 -360 到 360 之间
    
    return {
      width: `${stretchFactor * 100}px`,
      transform: `rotate(${angle}deg)`,
      opacity: stretchFactor
    };
  };

  return (
    <div className="color-dots-container" ref={containerRef}>
      {Array.from({ length: totalDots }).map((_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const color = colors[col % colors.length];
        
        const dotX = (containerSize.width / (cols - 1)) * col;
        const dotY = (containerSize.height / (rows - 1)) * row;
        const lineStyle = calculateLine(dotX, dotY);
        
        return (
          <div
            key={index}
            className="dot-wrapper"
            style={{
              left: dotX,
              top: dotY
            }}
          >
            <div className="color-dot" style={{ backgroundColor: color }} />
            <div 
              className="line" 
              style={{
                ...lineStyle,
                backgroundColor: color
              }} 
            />
          </div>
        );
      })}
    </div>
  );
};

export default ColorDots; 