import { useState } from 'react'
import Button from '$/components/Button';
import PasswordInput from '$/components/PasswordInput';
import Connexion from '$/components/Connexion';

function Forgot() {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <Connexion height={280} title={'Forgotten Password'}>
      <PasswordInput
        className="my-5 glow"
        inputClassName='box-glow'
        password={email}
        setPassword={setEmail}
        label="Email"
      />
      <Button
        text="Confirm"
        colour='white-glow box-glow button-glow'
        route='/reset-password'
      />
    </Connexion>
  )
}

export default Forgot
