import { useState } from 'react'
import Button from '$/components/Button';
import PasswordInput from '$/components/PasswordInput';
import Connexion from '$/components/Connexion';
import useFetch from '$/hooks/useFetch';
import { useNavigate } from 'react-router-dom';

interface FormFields {
  newPassword: string;
  confirmPassword: string;
}

function ResetPassword() {
  const navigate = useNavigate();
  const save = useFetch("update_password", () => setIsSuccess(true), (err) => setErrors(err));
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<Array<Error>>([]);
  
  const [form, setForm] = useState<FormFields>({
      newPassword: "",
      confirmPassword: "",
  });

  const fields: { key: keyof FormFields; label: string; placeholder?: string }[] = [
    { key: "newPassword", label: "New Password"},
    { key: "confirmPassword", label: "Confirm Password"},
  ];

  const handleClick = () => {
    save.mutate({
      newPassword: form.newPassword,
      confirmPassword: form.confirmPassword,
    });
  };

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };
  
  return (
    <Connexion height={340} title={isSuccess ? 'Email sent' : 'Reset your password'}>
      {isSuccess ?
        <>
          <Button
            text="Back to login"
            colour='white-glow box-glow button-glow mt-15'
            onClick={() => navigate('/login')}
          />
        </>
      :
        <>
          {fields.map(f => {
            return (
              <PasswordInput
                key={f.key} 
                password={form[f.key]}
                label={f.label}
                className="my-5 blue-glow"
                inputClassName='box-glow'
                onChange={(e) => handleChange(f.key, e.target.value)}
                errors={errors}
              />
            );
          })}
          <Button
            text="Confirm"
            colour='white-glow box-glow button-glow'
            onClick={handleClick}
          />
        </>
      }
    </Connexion>
  )
}

export default ResetPassword
