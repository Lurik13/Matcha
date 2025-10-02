import { useState } from 'react'
import Button from '$/components/Button';
import PasswordInput from '$/components/PasswordInput';

function ResetPassword() {
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className='text-center max-w-80'>
        <h1 className='text-4xl'>Reset your password</h1>
        <PasswordInput
          className="my-5"
          password={password}
          setPassword={setPassword}
          label="Password"
        />
        <PasswordInput
          className="my-5"
          password={confirmPassword}
          setPassword={setConfirmPassword}
          label="Confirm password"
        />
        <Button
          text="Confirm"
          colour='bg-pink-200'
          route='/login'
        />
      </div>
    </div>
  )
}

export default ResetPassword
