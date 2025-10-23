import { useState } from 'react'
import Input from '$/components/Input'
import PasswordInput from '$/components/PasswordInput';
import Button from '$/components/Button';
import TextLink from '$/components/TextLink';

function Login() {
  const [userName, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className='text-center max-w-80'>
        <h1 className='text-4xl text-blue-500'>Login</h1>
        <Input
          value={userName}
          label={"UserName"}
          placeholder="Darth Plagueis"
          type="text"
          className='text-blue-500'
          onChange={(e) => setUserName(e.target.value)}
        />
        <PasswordInput
          className='mt-5'
          password={password}
          setPassword={setPassword}
          label="Password"
        />
        <div className='flex justify-end mb-5'>
          <TextLink
            text="Forgot password?"
            className="text-blue-500 text-xs"
            link="/forgot-password"
            />
        </div>
        <Button
          text="Login"
          colour='bg-red-800'
          // url='test'
        />
        <div className="text-xs">
          Don't have an account?
          <TextLink
            text="Register"
            className="text-blue-500 mx-2"
            link="/register"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
