import { useState } from 'react'
import Input from '$/components/Input'
import PasswordInput from '$/components/PasswordInput';
import Button from '$/components/Button';
import TextLink from '$/components/TextLink';
import Connexion from '$/components/Connexion';
import { useNavigate } from 'react-router-dom';
import useFetch from '$/components/useFetch';
import { apiUrl } from '$/helper';

function Register() {
  const [userName, setUserName] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);
  const save = useFetch(
    apiUrl("register"),
    {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (err) => {
        console.log("Erreur côté registre :", err);
      }
    }
  );
  const navigate = useNavigate();

  const handleClick = () => {
    save.mutate({
      username: userName,
      email,
      password,
      firstname: firstName,
      lastname: lastName,
    });
  };

  return (
    <Connexion height={552} title='Register'>
      <Input
        value={userName}
        label={"UserName"}
        placeholder="Darth Plagueis"
        type="text"
        className='glow'
        inputClassName='box-glow'
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        value={firstName}
        label={"First Name"}
        placeholder="Hego"
        type="text"
        className='glow'
        inputClassName='box-glow'
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        value={lastName}
        label={"Last Name"}
        placeholder="Damask"
        type="text"
        className='glow'
        inputClassName='box-glow'
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        value={email}
        label={"Email"}
        placeholder="example@test.com"
        type="email"
        className='glow'
        inputClassName='box-glow'
        onChange={(e) => setEmail(e.target.value)}
      />
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
        text="Register"
        colour='white-glow box-glow button-glow'
        onClick={handleClick}
      />
      <div className="text-xs">
        <span className='glow'>Already have an account?</span>
        <TextLink
          text="Login"
          className="mx-2 white-glow"
          link="/login"
        />
      </div>
    </Connexion>
  )
}

export default Register
