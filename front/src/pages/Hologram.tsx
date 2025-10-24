import { Stage, Layer } from 'react-konva';
import Konva from 'konva';
import { useEffect, useRef } from 'react';

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const spawnCoos = HEIGHT / 2 - HEIGHT / 4;

function getOpacity(y: number) {
  if (y < spawnCoos + 20) {
    return (y - spawnCoos) / 100;
  } else if (y > spawnCoos + 450 - 20) {
    return (spawnCoos + 450 - y) / 100;
  }
  return 0.2;
}

function getX(y: number) {
  if (y < spawnCoos + 20 || y > spawnCoos + 450 - 20) {
    return WIDTH / 2 - WIDTH / 8 + spawnCoos + 20 - y;
  }
  return WIDTH / 2 - WIDTH / 8;
}

function getWidth(y: number) {
  if (y < spawnCoos + 20 || y > spawnCoos + 450 - 20) {
    return WIDTH / 4 - spawnCoos + 20 - y;
  }
  return WIDTH / 4;
}

const Hologram = () => {
  const holo = useRef<any>(null);
  
  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      const y = spawnCoos + i * 4.5;
      console.log(getOpacity(y));
      const rect = new Konva.Rect({
        x: WIDTH / 2 - WIDTH / 8,
        y: y,
        width: WIDTH / 4,
        height: 2,
        fill: '#0459c9ff',
        opacity: getOpacity(y),
      });
      holo.current?.add(rect);
    }

    const anim = new Konva.Animation(() => {
      holo.current?.children?.forEach((line: any) => {
        const speed = 0.15;
        const y = line.y();
        line.opacity(getOpacity(y));
        line.y(y + speed);
        if (y > spawnCoos + 450) {
          line.opacity(0);
          line.y(spawnCoos);
        }
      });
    }, holo.current);

    anim.start();
    return () => anim.stop();
  }, [])

  return (
    <Stage
      width={WIDTH}
      height={HEIGHT}
      listening={false}
    >
      <Layer ref={holo} />
    </Stage>
  )
}

export default Hologram;
