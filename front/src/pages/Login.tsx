import { useState } from 'react'
import Input from '$/components/Input'
import PasswordInput from '$/components/PasswordInput';
import Button from '$/components/Button';
import TextLink from '$/components/TextLink';
import '$/style/text-glow.css';

function Login() {
  const [userName, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className='text-center max-w-80'>
        <h1 className='glow text-6xl'>Login</h1>
        <Input
          value={userName}
          label={"UserName"}
          placeholder="Darth Plagueis"
          type="text"
          className='glow'
          inputClassName='box-glow'
          onChange={(e) => setUserName(e.target.value)}
        />
        <PasswordInput
          className='mt-5 glow'
          inputClassName='box-glow'
          password={password}
          setPassword={setPassword}
          label="Password"
        />
        <div className='flex justify-end mb-5'>
          <TextLink
            text="Forgot password?"
            className="white-glow text-xs"
            link="/forgot-password"
            />
        </div>
        <Button
          text="Login"
          colour='white-glow box-glow button-glow'
          // url='test'
        />
        <div className="text-xs">
          <span className='glow'>Don't have an account?</span>
          <TextLink
            text="Register"
            className="mx-2 white-glow"
            link="/register"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
