import React from 'react';
import { useState } from 'react'
import Input from './components/Input'
import './App.css'
import ImageBoolean from './components/ImageBoolean';
import PasswordInput from '$/components/PasswordInput';
import Button from './components/Button';

function App() {
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
        <div className='text-blue-500 text-xs float-right'>
          Forgot password?
        </div>
        <br></br>
        <Button
          text="Login"
          colour='#9b0000'
          url='test'
        />
        <div className="loginSeparation"></div>
        <button className="otherConnection"></button>
        <button className="otherConnection"></button>
        <button className="otherConnection"></button>
        Don't have an account?
        Sign up now
      </div>
    </div>
  )
}

export default App
