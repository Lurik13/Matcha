import { useState } from 'react'
import Input from '$/components/Input'
import PasswordInput from '$/components/PasswordInput';
import Button from '$/components/Button';
import TextLink from '$/components/TextLink';
import Connexion from '$/components/Connexion';
import { useNavigate } from 'react-router-dom';
import useFetch from '$/components/useFetch';

interface FormFields {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Register() {
  const navigate = useNavigate();
  const save = useFetch("register", () => navigate("/login"), (err) => setErrors(err));
  const [errors, setErrors] = useState<Array<Error>>([]);
  
  const [form, setForm] = useState<FormFields>({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const fields: { key: keyof FormFields; label: string; placeholder?: string; type: string }[] = [
    { key: "userName", label: "User Name", placeholder: "Darth Plagueis", type: "text" },
    { key: "firstName", label: "First Name", placeholder: "Hego", type: "text" },
    { key: "lastName", label: "Last Name", placeholder: "Damask", type: "text" },
    { key: "email", label: "Email", placeholder: "example@test.com", type: "email" },
    { key: "password", label: "Password", type: "password" },
    { key: "confirmPassword", label: "Confirm Password", type: "password" },
  ];

  const handleClick = () => {
    save.mutate({
      username: form.userName,
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
      firstname: form.firstName,
      lastname: form.lastName,
    });
  };

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Connexion height={552} title='Register'>
      {fields.map(f => {
        if (f.type === "password") {
          return (
            <PasswordInput
              key={f.key}
              password={form[f.key]}
              label={f.label}
              className="my-5 blue-glow"
              inputClassName="box-glow"
              onChange={(e) => handleChange(f.key, e.target.value)}
              errors={errors}
            />
          );
        }
        return (
          <Input
            key={f.key}
            value={form[f.key]}
            label={f.label}
            placeholder={f.placeholder}
            type={f.type}
            className="blue-glow"
            inputClassName="box-glow"
            onChange={(e) => handleChange(f.key, e.target.value)}
            errors={errors}
          />
        );
      })}
      <Button
        text="Register"
        colour='white-glow box-glow button-glow'
        onClick={handleClick}
      />
      <div className="text-xs">
        <span className='blue-glow'>Already have an account?</span>
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
