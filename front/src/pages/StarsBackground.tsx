import { Stage, Layer } from 'react-konva';
import Konva from 'konva';
import { useEffect, useRef, useState } from 'react';

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
  
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    space.current?.destroyChildren();
    stars.current?.destroyChildren();
    const stars_number = dimensions.width * dimensions.height * 0.003;

    const rect = new Konva.Rect({
      width: dimensions.width,
      height: dimensions.height,
      fill: 'black'
    });
    space.current?.add(rect);
  
    for (let i = 0; i < stars_number; i++) {
      const radius = Math.random() ** 2.5;
      const circle = new Konva.Circle({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius,
        fill: getRandomColour(),
      });
      stars.current?.add(circle);
    }

    const anim = new Konva.Animation(() => {
      stars.current?.children?.forEach((star: any) => {
        const star_radius = star.radius();
        const speed = star_radius / 5;
        star.x(star.x() - speed);
        star.y(star.y() + speed * STARS_ANGLE);
        if (star.x() < -star_radius) {
          star.x(dimensions.width + star_radius);
        }
        if (star.y() > dimensions.height + star_radius) {
          star.y(-star_radius);
        }
      });
    }, stars.current)

    anim.start();
    return () => {
      anim.stop();
      space.current?.destroyChildren();
      stars.current?.destroyChildren();
    };
  }, [dimensions])

  return (
    <Stage
      width={dimensions.width}
      height={dimensions.height}
      listening={false}
    >
      <Layer ref={space} />
      <Layer ref={stars} />
    </Stage>
  )
}

export default StarsBackground;
