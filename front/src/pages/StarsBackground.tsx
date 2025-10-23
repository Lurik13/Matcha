import { Stage, Layer } from 'react-konva';
import Konva from 'konva';
import { useEffect, useRef } from 'react';

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const STARS_ANGLE = 0.3;

function getRandomColour() {
  const letters = ['d', 'e', 'f'];
  let colour = ['d', 'd', 'd'];

  const redOrBlue = Math.round(Math.random());
  const mid_colour = Math.round(Math.random() * 2);
  const second_colour = Math.round(Math.random() * mid_colour);

  colour[redOrBlue * 2] = 'f';
  colour[1] = letters[mid_colour];
  colour[Math.abs(redOrBlue * 2 - 2)] = letters[second_colour];

  return '#' + colour[0] + colour[1] + colour[2];
}

const StarsBackground = () => {
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
      const radius = Math.random() ** 2.5;
      const circle = new Konva.Circle({
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT,
        radius,
        fill: getRandomColour(),
      });
      stars.current?.add(circle);
    }

    const anim = new Konva.Animation(() => {
      stars.current?.children?.forEach((star: any) => {
        const star_radius = star.radius();
        const speed = star_radius / 7;
        star.x(star.x() - speed);
        star.y(star.y() + speed * STARS_ANGLE);
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

export default StarsBackground;
