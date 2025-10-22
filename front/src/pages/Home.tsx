import { useState } from 'react';
import Input from '$/components/Input';
import StarsBackground from '$/pages/StarsBackground';

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
          backgroundColor: 'black',
        }}>
        <StarsBackground />
      </div>
    </div>
  );
}

export default Home;
