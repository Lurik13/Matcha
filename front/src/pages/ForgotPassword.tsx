import { useState } from 'react'
import Button from '$/components/Button';
import PasswordInput from '$/components/PasswordInput';

function Forgot() {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className='text-center max-w-80'>
        <h1 className='text-4xl'>Forgotten Password</h1>
        <PasswordInput
          className="my-5"
          password={email}
          setPassword={setEmail}
          label="Email"
        />
        <Button
          text="Confirm"
          colour='bg-orange-200'
          route='/reset-password'
        />
      </div>
    </div>
  )
}

export default Forgot
