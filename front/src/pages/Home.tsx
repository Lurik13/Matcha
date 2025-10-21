import { Stage, Layer } from 'react-konva';
import Konva from 'konva';
import { useEffect, useRef, useState } from 'react';
import Input from '$/components/Input';

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

const Canvas = () => {
  const layerRef = useRef<any>(null)
  layerRef.current?.add(new Konva.Rect({
    width:window.innerWidth,
    height:window.innerHeight,
    fill:"black"
  }));
  useEffect(() => {
    for (let i = 0; i < 1000; i++) {
      const radius = Math.random()
      const circle = new Konva.Circle({
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT,
        radius,
        fill: 'black',
      })
      layerRef.current?.add(circle)
    }

    const anim = new Konva.Animation(() => {
      layerRef.current?.children?.forEach((star: any) => {
        const star_radius = star.radius()
        const speed = star_radius
        star.x(star.x() - speed)
        star.y(star.y() + speed * 0.3)
        if (star.x() < -star_radius) {
          star.x(WIDTH + star_radius);
        }
        if (star.y() > HEIGHT + star_radius) {
          star.y(-star_radius);
        }
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