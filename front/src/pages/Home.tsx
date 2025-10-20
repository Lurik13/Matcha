import { Stage, Layer, Circle, Rect } from 'react-konva';
import Konva from 'konva';
import React, { useEffect, useRef, useState } from 'react';

const velocityX = -2
const velocityY = 1

function generateItems(count = 10) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      id: 'ball-' + i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 20 + Math.random() * 30,
      color: Konva.Util.getRandomColor(),
    });
  }
  return items;
}

const Canvas = () => {
  const [balls, setBalls] = useState(generateItems());
  const layerRef = useRef<any>(null);

  useEffect(() => {
    const anim = new Konva.Animation(() => {
      setBalls((prev) => {
        const updated = prev
          .map((ball) => ({
            ...ball,
            x: ball.x + velocityX,
            y: ball.y + velocityY,
          }))
          .filter((b) => b.x + b.radius > 0 && b.y - b.radius < window.innerHeight);
        return updated;
      });
    }, layerRef.current);

    anim.start();
    return () => anim.stop();
  }, []);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer ref={layerRef}>
        <Rect
          width={window.innerWidth}
          height={window.innerHeight}
          fill="black"
        />
        {balls.map((ball) => (
          <Circle
            key={ball.id}
            x={ball.x}
            y={ball.y}
            radius={ball.radius}
            fill={ball.color}
          />
        ))}
      </Layer>
    </Stage>
  );
};

function Home () {
  return (
    <div>
      Salut
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}>
        <Canvas />
      </div>
    </div>
  );
}
export default Home;