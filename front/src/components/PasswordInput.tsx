import { useState } from 'react';
import Fulcrum from '$/assets/Fulcrum.png'
import JaigEyes from '$/assets/JaigEyes.png'
import ImageBoolean from '$/components/ImageBoolean';

interface Props {
  className: string;
  inputClassName?: string;
  password: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = (props: Props) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);
  
  return (
    <div className={props.className}>
      <label 
        htmlFor={props.label} 
        className="text-xs block text-left"
      >
        {props.label}
      </label>
      <div className={`border flex flex-container  ${props?.inputClassName}`}>
        <input
          id={props.label}
          name={props.label}
          size={17}
          placeholder='Enter password'
          value={props.password ? props.password : ""}
          type={isHiddenPassword ? "password" : "text"}
          className='flex-grow-200 px-1'
          onChange={props.onChange}
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
