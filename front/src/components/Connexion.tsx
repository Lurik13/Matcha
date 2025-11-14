import Hologram from "$/pages/Hologram";
import StarsBackground from "$/pages/StarsBackground";

interface Props {
  height: number;
  title: string;
  children: React.ReactNode;
}

function Connexion({ height, title, children }: Props) {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="fixed w-full h-full -z-20">
        <StarsBackground />
      </div>
      <div className="fixed w-full h-full z-20 pointer-events-none">
        <Hologram 
          width={374}
          height={height}
        />
      </div>
      <div className="relative flex justify-center items-center min-h-screen">
        <div className='text-center max-w-80'>
          <h1 className='text-4xl glow'>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Connexion;