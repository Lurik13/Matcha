import { useState } from 'react'
import Input from '$/components/Input'
import PasswordInput from '$/components/PasswordInput';
import Button from '$/components/Button';
import TextLink from '$/components/TextLink';
import '$/style/text-glow.scss';
import Connexion from '$/components/Connexion';
import useFetch from '$/hooks/useFetch';
import { useNavigate } from 'react-router-dom';

interface FormFields {
  userName: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const save = useFetch("login", () => navigate("/home"), (err) => setErrors(err));
  const [errors, setErrors] = useState<Array<Error>>([]);
  
  const [form, setForm] = useState<FormFields>({
    userName: "",
    password: "",
  });

  const handleClick = () => {
    save.mutate({
      username: form.userName,
      password: form.password,
    });
  };

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    setErrors(errors.filter(e => e.name !== key));
  };

  return (
    <Connexion height={320} title='Login'>
      <Input
        value={form.userName}
        label={"UserName"}
        placeholder="Darth Plagueis"
        type="text"
        className='blue-glow'
        inputClassName='box-glow'
        onChange={(e) => handleChange("userName", e.target.value)}
        errors={errors}
      />
      <PasswordInput
        className='mt-5 blue-glow'
        inputClassName='box-glow'
        password={form.password}
        onChange={(e) => handleChange("password", e.target.value)}
        label="Password"
        errors={errors}
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
        <span className='blue-glow'>Don't have an account?</span>
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
