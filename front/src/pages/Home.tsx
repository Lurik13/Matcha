import StarsBackground from '$/pages/StarsBackground'
import '$/components/hologram.css'
import Login from './Login'
import Hologram from './Hologram'

function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="fixed w-full h-full -z-20">
        <StarsBackground />
      </div>
      <div className="fixed w-full h-full z-20 pointer-events-none">
          <Hologram 
            width={374}
            height={380}
          />
      </div>

      <div className="relative flex flex-col items-center justify-center h-full">
        <Login />
      </div>
    </div>
  );
}

export default Home
