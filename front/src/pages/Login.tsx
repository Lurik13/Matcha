import { useState } from 'react'
import Input from '$/components/Input'
import PasswordInput from '$/components/PasswordInput';
import Button from '$/components/Button';
import TextLink from '$/components/TextLink';
import '$/style/text-glow.css';
import Connexion from '$/components/Connexion';
import useFetch from '$/components/useFetch';
import { apiUrl } from '$/helper';
import { useNavigate } from 'react-router-dom';

interface FormFields {
  userName: string;
  password: string;
}

function Login() {
  const [form, setForm] = useState<FormFields>({
    userName: "",
    password: "",
  });

  const save = useFetch(
    apiUrl("login"),
    {
      onSuccess: () => {
        navigate("/home");
      },
      onError: (err) => {
        console.log("Erreur côté registre :", err);
      }
    }
  );
  const navigate = useNavigate();

  const handleClick = () => {
    save.mutate({
      username: form.userName,
      password: form.password,
    });
  };

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Connexion height={320} title='Login'>
      <Input
        value={form.userName}
        label={"UserName"}
        placeholder="Darth Plagueis"
        type="text"
        className='glow'
        inputClassName='box-glow'
        onChange={(e) => handleChange("userName", e.target.value)}
      />
      <PasswordInput
        className='mt-5 glow'
        inputClassName='box-glow'
        password={form.password}
        onChange={(e) => handleChange("password", e.target.value)}
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
        onClick={handleClick}
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
  )
}

export default Login
