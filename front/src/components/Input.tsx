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
  const className = `border w-full px-1 ${props?.inputClassName}`;
  return (
    <div className={`my-5 ${props?.className}`}>
      <label 
        htmlFor={props.label} 
        className="text-xs float-left"
      >
        {props.label}
      </label>
      {props.type === "textarea" ? (
        <textarea 
          className={`${className} max-h-24`}
          id={props.label}
          name={props.label}
          value={props.value ? props.value : ""}
          placeholder={props?.placeholder}
          // onChange={props.onChange}
        />
      ) : (
        <div>
          <input
            className={className}
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
    )}
    </div>
  );
}

export default Input;
