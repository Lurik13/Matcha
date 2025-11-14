import '$/components/hologram.css'
import Connexion from '$/components/Connexion';
import Input from '$/components/Input';
import PasswordInput from '$/components/PasswordInput';
import TextLink from '$/components/TextLink';
import Button from '$/components/Button';
import { useState } from 'react';

function Home() {
  const [userName, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  
  return (
    <Connexion height={380} title='Login'>
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
    </Connexion>
  );
}

export default Home;
