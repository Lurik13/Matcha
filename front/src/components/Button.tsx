interface Props {
  text: string;
  colour: string;
  url: string;
}

const Button = (props: Props) => {
  return (
    <div className={"bg-green-500 cursor-pointer select-none"}>
      {props.text}
    </div>
  );
}

export default Button;
