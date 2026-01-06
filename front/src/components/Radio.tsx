interface Props {
  value?: string;
  label: string;
  className?: string;
}

function Radio (props: Props) {
  const choices = ['Light', 'Grey', 'Dark'];
  return (
    <div className={`my-5 ${props?.className} blue-glow`}>
      <p className="text-xs float-left ">{props.label}</p>
      <div className="flex w-full gap-2">
        {choices.map(choice => {
          const id = `${props.label}_${choice}`;
          return (
            <div key={choice} className="flex-1">
              <input
                id={id}
                type="radio"
                name={props.label}
                className="hidden"
                checked={props?.value === choice}
              />
              <label
                htmlFor={id}
                className="flex items-center justify-center w-full button-glow"
              >
                {choice}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Radio;
