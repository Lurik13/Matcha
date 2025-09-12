import { useState } from 'react'
import Fulcrum from './assets/Fulcrum.png'
import JaigEyes from './assets/JaigEyes.png'
import './App.css'

function App() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div>
      Login
      Email
      <input>
        {email}
      </input>
      Password
      <input>
        {password}
      </input>
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
