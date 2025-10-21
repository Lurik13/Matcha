import { Stage, Layer, Circle, Rect } from 'react-konva';
import Konva from 'konva';
import React, { useEffect, useRef, useState } from 'react';
import Input from '$/components/Input';

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

const Canvas = () => {
  const layerRef = useRef<any>(null)

  useEffect(() => {
    for (let i = 0; i < 80; i++) {
      const radius = 5 + Math.random() * 15
      const circle = new Konva.Circle({
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT,
        radius,
        fill: Konva.Util.getRandomColor(),
        opacity: 0.4,
      })
      layerRef.current?.add(circle)
    }

    const anim = new Konva.Animation(() => {
      layerRef.current?.children?.forEach((node: any) => {
        const r = node.radius()
        const speed = 0.2 + r * 0.03
        node.x(node.x() - speed)
        node.y(node.y() + speed * 0.3)
        if (node.x() < -r) node.x(WIDTH + r)
        if (node.y() > HEIGHT + r) node.y(-r)
      })
    }, layerRef.current)

    anim.start()
    return () => anim.stop()
  }, [])

  return (
    <Stage
      width={WIDTH}
      height={HEIGHT}
      listening={false}
    >
      <Layer ref={layerRef} />
    </Stage>
  )
}


function Home () {
  const [userName, setUserName] = useState<string | null>(null);
  return (
    <div>
      <Input
        value={userName}
        label={"UserName"}
        placeholder="Darth Plagueis"
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}>
        <Canvas />
      </div>
    </div>
  );
}
export default Home;