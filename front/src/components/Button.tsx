import useFetch from '$/components/useFetch'
import { useNavigate } from 'react-router-dom';

interface Props {
  text: string;
  colour: string;
  url: string;
}

const Button = (props: Props) => {
  const navigate = useNavigate();
  
  const handleClick = async () => {
    const data = await useFetch("https://api.github.com/users/Lurik13");
    if (data.login == "Lurik13") {
      navigate('/register');
    }
  };

  return (
    <div 
      className={`${props.colour} cursor-pointer select-none`}
      onClick={handleClick}
    >
      {props.text}
    </div>
  );
}

export default Button;
