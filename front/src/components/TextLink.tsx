import { Link } from 'react-router-dom';

interface Props {
  text: string;
  className: string;
  link: string;
}

const TextLink = (props: Props) => {
  return (
    <Link to={props.link} className={`cursor-pointer select-none ${props.className}`}>
      {props.text}
    </Link>
  );
}

export default TextLink;
