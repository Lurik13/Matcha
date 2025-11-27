interface Props {
  value: string | null;
  label: string;
  placeholder?: string;
  type: string;
  className?: string;
  inputClassName?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Error[];
}

function Input (props: Props) {
  const error = props.errors.some((e) => e.name === props.label);
  return (
    <div className={`my-5 ${props?.className}`}>
      <label 
        htmlFor={props.label} 
        className="text-xs float-left"
      >
        {props.label}
      </label>
      <input
        className={`border w-full px-1 ${props?.inputClassName}`}
        id={props.label}
        name={props.label}
        value={props.value ? props.value : ""}
        placeholder={props?.placeholder}
        type={props.type}
        onChange={props.onChange}
      />
      {error &&
        <p className="text-red-500 text-xs flex justify-start red-glow">
          {error}
        </p>
      }
    </div>
  );
}

export default Input;
