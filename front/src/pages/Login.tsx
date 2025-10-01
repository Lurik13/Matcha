import { useState } from 'react'
import Input from '$/components/Input'
import PasswordInput from '$/components/PasswordInput';
import Button from '$/components/Button';
import TextLink from '$/components/TextLink';
import ForgotPassword from './ForgotPassword';

function Login() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className='text-center max-w-80'>
        <h1 className='text-4xl'>Login</h1>
        <Input
          value={email}
          label={"Email"}
          placeholder="example@test.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          password={password}
          setPassword={setPassword}
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
          colour='#9b0000'
          url='test'
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
