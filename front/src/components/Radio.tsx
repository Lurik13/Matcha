interface Props {
  value: string;
  label: string;
  name: string;
  onChange: (name: string, value: string) => void;
}

function Radio(props: Props) {
  const choices = ['Light', 'Grey', 'Dark'];
  return (
    <div className="my-5 blue-glow">
      <p className="text-xs float-left">{props.label}</p>
      <div className="flex w-full gap-2">
        {choices.map(choice => {
          const id = `${props.name}_${choice}`;
          return (
            <div key={choice} className="flex-1">
              <input
                id={id}
                type="radio"
                name={props.name}
                className="hidden"
                value={choice}
                checked={props.value === choice}
                onChange={() => props.onChange(props.name, choice)}
              />
              <label
                htmlFor={id}
                className="flex items-center justify-center w-full button-glow cursor-pointer"
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
