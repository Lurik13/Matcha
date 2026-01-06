import '$/style/hologram.scss'
import Connexion from '$/components/Connexion';
import { useState } from 'react';
import useFetch from '$/hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Input from '$/components/Input';
import Radio from '$/components/Radio';

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  allegiance: string;
  biography: string;
  interests: Record<string, string[]>;
}

function Settings() {
  const [errors, setErrors] = useState<Array<Error>>([]);
  const navigate = useNavigate();
  const save = useFetch("register", () => navigate("/settings"), (err) => setErrors(err));
  
  const [form, setForm] = useState<FormFields>({
    firstName: "Lucas",
    lastName: "Ribette",
    email: "lucas.ribette@gmail.com",
    gender: "Light",
    allegiance: "Dark",
    biography: "Je s'appelle Groot.",
    interests: {
      'nourriture': [],
      'sport': []
    }
  });

  const fields: { key: keyof FormFields; label: string; placeholder?: string; type: string, value?: string }[] = [
    { key: "firstName", label: "First Name", placeholder: "Hego", type: "text" },
    { key: "lastName", label: "Last Name", placeholder: "Damask", type: "text" },
    { key: "email", label: "Email", placeholder: "example@test.com", type: "email" },
    { key: "gender", label: "Gender", type: "radio" },
    { key: "allegiance", label: "Allegiance", type: "radio" },
    { key: "interests", label: "Interests", type: "checkbox" },
  ];

  const handleClick = () => {
    save.mutate({
      firstname: form.firstName,
      lastname: form.lastName,
      email: form.email,
      gender: form.gender,
      allegiance: form.allegiance,
    });
  };

  const handleChange = (key: string, value: string) => {
    console.log(key, value)
    setForm(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Connexion height={552} width={900} title='Settings'>
      {fields.map(f => {
        if (f.type === "radio") {
          return (
            <Radio
              key={f.key}
              label={f.label}
              value={form[f.key] as string}
              name={f.key}
              onChange={handleChange}
            />
          );
        }
        return (
          <Input
            key={f.key}
            value={form[f.key] as string}
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
