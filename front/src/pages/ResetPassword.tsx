import { useState } from 'react'
import Button from '$/components/Button';
import PasswordInput from '$/components/PasswordInput';
import Connexion from '$/components/Connexion';

function ResetPassword() {
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

  return (
    <Connexion height={340} title='Reset your password'>
      <PasswordInput
        className="my-5 glow"
        inputClassName='box-glow'
        password={password}
        setPassword={setPassword}
        label="Password"
      />
      <PasswordInput
        className="my-5 glow"
        inputClassName='box-glow'
        password={confirmPassword}
        setPassword={setConfirmPassword}
        label="Confirm password"
      />
      <Button
        text="Confirm"
        colour='white-glow box-glow button-glow'
        route='/login'
      />
    </Connexion>
  )
}

export default ResetPassword
