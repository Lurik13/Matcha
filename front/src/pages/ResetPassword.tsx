import { useState } from 'react'
import Button from '$/components/Button';
import PasswordInput from '$/components/PasswordInput';
import StarsBackground from './StarsBackground';
import Hologram from './Hologram';

function ResetPassword() {
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="fixed w-full h-full -z-20">
        <StarsBackground />
      </div>
      <div className="fixed w-full h-full z-20 pointer-events-none">
        <Hologram 
          width={374}
          height={340}
        />
      </div>
      <div className="relative flex justify-center items-center min-h-screen">
        <div className='text-center max-w-80'>
          <h1 className='text-4xl glow'>Reset your password</h1>
          <PasswordInput
            className="my-5 glow"
            inputClassName='box-glow'
            password={password}
            setPassword={setPassword}
            label="Password"
          />
          <PasswordInput
            className="my-5 glow"
            inputClassName='box-glow'
            password={confirmPassword}
            setPassword={setConfirmPassword}
            label="Confirm password"
          />
          <Button
            text="Confirm"
            colour='white-glow box-glow button-glow'
            route='/login'
          />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
