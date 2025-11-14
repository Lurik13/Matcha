import { useState } from 'react'
import Button from '$/components/Button';
import PasswordInput from '$/components/PasswordInput';
import StarsBackground from './StarsBackground';
import Hologram from './Hologram';

function Forgot() {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="fixed w-full h-full -z-20">
        <StarsBackground />
      </div>
      <div className="fixed w-full h-full z-20 pointer-events-none">
        <Hologram 
          width={374}
          height={280}
        />
      </div>
      <div className="relative flex justify-center items-center min-h-screen">
        <div className='text-center max-w-80'>
          <h1 className='glow text-4xl'>Forgotten Password</h1>
          <PasswordInput
            className="my-5 glow"
            inputClassName='box-glow'
            password={email}
            setPassword={setEmail}
            label="Email"
          />
          <Button
            text="Confirm"
            colour='white-glow box-glow button-glow'
            route='/reset-password'
          />
        </div>
      </div>
    </div>
  )
}

export default Forgot
