interface Props {
  text: string;
  colour: string;
  route?: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Button = (props: Props) => {
  return (
    <div 
      className={`${props.colour} ${props.className} cursor-pointer select-none`}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
}

export default Button;
