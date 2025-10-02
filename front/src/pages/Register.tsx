import { useState } from 'react'
import Input from '$/components/Input'
import PasswordInput from '$/components/PasswordInput';
import Button from '$/components/Button';

function Register() {
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className='text-center max-w-80'>
        <h1 className='text-4xl'>Register</h1>
        <Input
          value={firstName}
          label={"First Name"}
          placeholder="Hego"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          value={lastName}
          label={"Last Name"}
          placeholder="Damask"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          value={email}
          label={"Email"}
          placeholder="example@test.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          className="my-5"
          password={password}
          setPassword={setPassword}
          label="Password"
        />
        <PasswordInput
          className="my-5"
          password={confirmPassword}
          setPassword={setConfirmPassword}
          label="Confirm password"
        />
        <Button
          text="Register"
          colour='bg-cyan-300'
          // url='test'
        />
      </div>
    </div>
  )
}

export default Register
