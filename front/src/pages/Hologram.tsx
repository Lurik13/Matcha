import { Stage, Layer } from 'react-konva';
import Konva from 'konva';
import { useEffect, useRef } from 'react';

const MARGIN = 20;
const LINES_SPEED = 0.15;
const LINES_WIDTH = 2;
const LINES_GAP = 2;

interface Props {
  width: number;
  height: number;
}

const Hologram = (props: Props) => {
  const holo = useRef<any>(null);
  
  function getOpacity(y: number) {
    if (y < MARGIN) {
      return (y) / 100;
    } else if (y > props.height - MARGIN) {
      return (props.height - y) / 100;
    }
    return 0.2;
  }
  
  useEffect(() => {
    const lines_number = Math.round(props.height / LINES_WIDTH / LINES_GAP);
    console.log(lines_number);
    for (let i = 0; i < lines_number; i++) {
      const y = i * LINES_WIDTH * LINES_GAP;
      const rect = new Konva.Rect({
        x: 0,
        y: y,
        width: props.width,
        height: LINES_WIDTH,
        fill: '#0459c9ff',
        opacity: getOpacity(y),
      });
      holo.current?.add(rect);
    }

    const anim = new Konva.Animation(() => {
      holo.current?.children?.forEach((line: any) => {
        const y = line.y();
        line.opacity(getOpacity(y));
        line.y(y + LINES_SPEED);
        line.width(props.width);
        if (y > props.height) {
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
        width={props.width}
        height={props.height}
        listening={false}
      >
        <Layer ref={holo} />
      </Stage>
    </div>
  )
}

export default Hologram;
