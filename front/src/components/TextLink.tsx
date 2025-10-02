import { Link } from 'react-router';

interface Props {
  text: string;
  className: string;
  link: string;
}

const TextLink = (props: Props) => {
  return (
    <Link to={props.link} className={`cursor-pointer select-none ${props.className} hover:underline`}>
      {props.text}
    </Link>
  );
}

export default TextLink;
