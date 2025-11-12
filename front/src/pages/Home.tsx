import StarsBackground from '$/pages/StarsBackground'
import '$/components/hologram.css'
import Login from './Login'
import Hologram from './Hologram'

function Home() {
  // const [userName, setUserName] = useState<string | null>(null)

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="fixed w-full h-full -z-20">
        <StarsBackground />
      </div>
      <div className="fixed w-full h-full z-20 pointer-events-none">
          <Hologram />
      </div>

      <div className="relative flex flex-col items-center justify-center h-full">
        {/* <Input
          value={userName}
          label="UserName"
          placeholder="Darth Plagueis"
          type="text"
          className="text-blue-400"
          onChange={(e) => setUserName(e.target.value)}
        /> */}

        <Login />

        {/* <div
          style={{
            width: window.innerWidth / 2,
            height: window.innerHeight / 2,
            backgroundColor: 'red',
          }}
          // className="layer2 rounded-lg opacity-60"
        /> */}
      </div>
    </div>
  );
}

export default Home
