import { Stage, Layer } from 'react-konva';
import Konva from 'konva';
import { useEffect, useRef } from 'react';

const WIDTH = 374;
const HEIGHT = 380;
const MARGIN = 20;
const STARS_SPEED = 0.15;

function getOpacity(y: number) {
  if (y < MARGIN) {
    return (y) / 100;
  } else if (y > HEIGHT - MARGIN) {
    return (HEIGHT - y) / 100;
  }
  return 0.2;
}

const Hologram = () => {
  const holo = useRef<any>(null);
  
  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      const y = i * HEIGHT / 100;
      const rect = new Konva.Rect({
        x: 0,
        y: y,
        width: WIDTH,
        height: 2,
        fill: '#0459c9ff',
        opacity: getOpacity(y),
      });
      holo.current?.add(rect);
    }

    const anim = new Konva.Animation(() => {
      holo.current?.children?.forEach((line: any) => {
        const y = line.y();
        line.opacity(getOpacity(y));
        line.y(y + STARS_SPEED);
        line.width(WIDTH);
        if (y > HEIGHT) {
          line.opacity(0);
          line.y(0);
        }
      });
    }, holo.current);

    anim.start();
    return () => anim.stop();
  }, [])

  return (
    <div className="flex justify-center items-center w-full h-full">
      <Stage
        width={WIDTH}
        height={HEIGHT}
        listening={false}
      >
        <Layer ref={holo} />
      </Stage>
    </div>
  )
}

export default Hologram;
