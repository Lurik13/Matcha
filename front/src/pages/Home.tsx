import { Stage, Layer } from 'react-konva';
import Konva from 'konva';
import { useEffect, useRef, useState } from 'react';
import Input from '$/components/Input';

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

function getRandomColour() {
  const letters = ['d', 'e', 'f'];
  let colour = ['a', 'a', 'a'];

  const redOrBlue = Math.round(Math.random());
  const mid_colour = Math.round(Math.random() * 2);
  const second_colour = Math.round(Math.random() * mid_colour);

  colour[redOrBlue * 2] = 'f';
  colour[1] = letters[mid_colour];
  colour[Math.abs(redOrBlue * 2 - 2)] = letters[second_colour];

  return '#' + colour[0] + colour[1] + colour[2];
}

const Canvas = () => {
  const stars = useRef<any>(null);
  const space = useRef<any>(null);
  
  useEffect(() => {
    const rect = new Konva.Rect({
      width: WIDTH,
      height: HEIGHT,
      fill: 'black'
    });
    space.current?.add(rect);
  
    for (let i = 0; i < 1000; i++) {
      const radius = Math.random()
      const circle = new Konva.Circle({
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT,
        radius,
        fill: getRandomColour(),
      })
      stars.current?.add(circle)
    }

    const anim = new Konva.Animation(() => {
      stars.current?.children?.forEach((star: any) => {
        const star_radius = star.radius();
        const speed = star_radius / 7;
        star.x(star.x() - speed)
        star.y(star.y() + speed * 0.3)
        if (star.x() < -star_radius) {
          star.x(WIDTH + star_radius);
        }
        if (star.y() > HEIGHT + star_radius) {
          star.y(-star_radius);
        }
      })
    }, stars.current)

    anim.start()
    return () => anim.stop()
  }, [])

  return (
    <Stage
      width={WIDTH}
      height={HEIGHT}
      listening={false}
    >
      <Layer ref={space} />
      <Layer ref={stars} />
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