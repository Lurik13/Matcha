import { useState, type Dispatch, type SetStateAction } from 'react';
import Fulcrum from './assets/Fulcrum.png'
import JaigEyes from './assets/JaigEyes.png'
import ImageBoolean from './ImageBoolean';

interface Props {
  password: string | null;
  setPassword: Dispatch<SetStateAction<string | null>>;
}

const PasswordInput = (props: Props) => {
  const label = "Password";
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);
  
  const handlePasswordChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setPassword(event.target.value);
  }

  return (
    <div className="mt-5">
      <label 
        htmlFor={label} 
        className="text-xs block text-left"
      >
        {label}
      </label>
      <div className="border flex flex-container">
        <input
          id={label}
          name={label}
          size={17}
          placeholder='Enter password'
          value={props.password ? props.password : ""}
          type={isHiddenPassword ? "password" : "text"}
          className='flex-grow-200'
          onChange={handlePasswordChange}
        />
        <div className='border-l flex-grow-1'>
          <ImageBoolean
            imageOn={JaigEyes}
            imageOff={Fulcrum}
            isOn={isHiddenPassword}
            action={() => setIsHiddenPassword(!isHiddenPassword)}
          />
        </div>
      </div>
    </div>
  );
}

export default PasswordInput;
