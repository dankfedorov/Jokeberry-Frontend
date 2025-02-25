import React, { useState } from 'react';
import '../assets/styles/floatingBackground.css'; // Подключаем стили

function FloatingBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Обработчик движения мыши
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 3;
    const centerY = window.innerHeight / 3;
    const offsetX = (clientX - centerX) / centerX;
    const offsetY = (clientY - centerY) / centerY;
    setPosition({ x: offsetX * 20, y: offsetY * 20 }); // Увеличиваем смещение
  };

  return (
    <div
      className="floating-background"
      onMouseMove={handleMouseMove}
      style={{
        backgroundPosition: `${50 + position.x}% ${50 + position.y}%`,
      }}
    >
      {/* <h1>Наведите курсор</h1> */}
    </div>
  );
}

export default FloatingBackground;