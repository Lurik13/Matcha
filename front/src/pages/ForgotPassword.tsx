import { useState } from 'react'
import Button from '$/components/Button';
import Connexion from '$/components/Connexion';
import Input from '$/components/Input';
import useFetch from '$/hooks/useFetch';

function Forgot() {
  const save = useFetch("forgot_password", () => setIsSuccess(true), (err) => setErrors(err));
  const [email, setEmail] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<Array<Error>>([]);
  
    const handleClick = () => {
      save.mutate({
        email: email,
      });
    };

  return (
    <Connexion height={280} title={isSuccess ? 'Email sent' : 'Forgotten Password'}>
      {!isSuccess &&
        <>
          <Input
            value={email}
            label="Email"
            placeholder="example@test.com"
            type="email"
            className="my-5 blue-glow"
            inputClassName='box-glow'
            onChange={(e) => setEmail(e.target.value)}
            errors={errors}
          />
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

export default Forgot
