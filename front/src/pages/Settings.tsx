import '$/style/hologram.scss'
import Connexion from '$/components/Connexion';
import { useState } from 'react';
import useFetch from '$/hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Input from '$/components/Input';

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  allegiance: string;
  biography: string;
}

function Settings() {
  const [errors, setErrors] = useState<Array<Error>>([]);
  const navigate = useNavigate();
  const save = useFetch("register", () => navigate("/settings"), (err) => setErrors(err));
  
  const [form, setForm] = useState<FormFields>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    allegiance: "",
    biography: "",
  });

  const fields: { key: keyof FormFields; label: string; placeholder?: string; type: string }[] = [
    { key: "firstName", label: "First Name", placeholder: "Hego", type: "text" },
    { key: "lastName", label: "Last Name", placeholder: "Damask", type: "text" },
    { key: "email", label: "Email", placeholder: "example@test.com", type: "email" },
  ];

  const handleClick = () => {
    save.mutate({
      firstname: form.firstName,
      lastname: form.lastName,
      email: form.email,
    });
  };

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Connexion height={552} title='Settings'>
      {fields.map(f => {
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
    </Connexion>
  );
}

export default Settings;
