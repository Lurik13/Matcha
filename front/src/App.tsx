import React from 'react';
// import {Button} from 'react-native';
import { useState } from 'react'
import Input from './Input'
import './App.css'
import ImageBoolean from './ImageBoolean';
import PasswordInput from './PasswordInput';

function App() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);

  return (
    <div className='text-center'>
      <h1 className='text-4xl'>Login</h1>
      <Input
        value={email}
        label={"Email"}
        placeholder="example@test.com"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        value={password}
        label={"Password"}
        placeholder="xxxxxxxxxxx"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <PasswordInput
        password={password}
        setPassword={setPassword}
      />
      <br></br>
      Forgot password?
      Login
      <div className="loginSeparation"></div>
      or continue with
      <button className="otherConnection"></button>
      <button className="otherConnection"></button>
      <button className="otherConnection"></button>
      Don't have an account?
      Sign up now
    </div>
  )
}

export default App
