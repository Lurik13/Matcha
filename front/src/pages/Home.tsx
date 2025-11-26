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
    <Connexion height={380} title='Logged in'>
      Blablabla
    </Connexion>
  );
}

export default Home;
