import { useState } from 'react'
import Input from '$/components/Input'
import PasswordInput from '$/components/PasswordInput';
import Button from '$/components/Button';

function ResetPassword() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className='text-center max-w-80'>
        <h1 className='text-4xl'>Reset your password</h1>
        <Input
          value={email}
          label={"Email"}
          placeholder="example@test.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          text="Send code"
          colour='bg-gray-300'
          className='mb-5'
          // url='test'
        />
        <Button
          text="Back to login"
          colour='bg-gray-100'
          route='/login'
        />
      </div>
    </div>
  )
}

export default ResetPassword
