import Hologram from "$/layers/Hologram";
import StarsBackground from "$/layers/StarsBackground";
import LanguageButton from "./LanguageButton";

interface Props {
  width?: number;
  height: number;
  title: string;
  children: React.ReactNode;
}

function Connexion({ width, height, title, children }: Props) {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="fixed w-full h-full -z-20">
        <StarsBackground />
      </div>
      <div className="fixed w-full h-full z-20 pointer-events-none">
        <Hologram 
          width={width ? width : 374}
          height={height}
          />
      </div>
      <LanguageButton />
      {/* <div className="fixed bottom-0 h-15 w-15 blue-glow button-glow m-5 justify-center items-center pt-2 float-bottom">
        <span className="text-3xl">A</span>
        <span className="text-xl">b</span>
      </div> */}
      <div className="relative flex justify-center items-center min-h-screen">
        <div className='text-center w-80'>
          <h1 className='text-4xl blue-glow'>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Connexion;