interface Props {
  value: string | null;
  label: string;
  placeholder?: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => (
  <div className="my-5">
    <label 
      htmlFor={props.label} 
      className="text-xs float-left"
    >
      {props.label}
    </label>
    <input
      className="border"
      id={props.label}
      name={props.label}
      value={props.value ? props.value : ""}
      placeholder={props?.placeholder}
      type={props.type}
      onChange={props.onChange}
    />
  </div>
);

export default Input;
