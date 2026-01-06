interface Props {
  value: string[];
  label: string;
  name: string;
  onChange: (name: string, value: string) => void;
}

function Tags(props: Props) {
  const interests = {
    'nourriture': ['raclette', 'tartiflette', 'chocolat'],
    'sport': ['vtt', 'course à pied', 'tchoukball', 'softball', 'basketball', 'ultimate', 'kinball', 'formule 1', 'moto', 'stunt', 'natation', 'judo', 'karaté', 'boxe'],
  }
  return (
    <div className="my-5 blue-glow">
      <p className="text-xs float-left">{props.label}</p>
      <div className="flex w-full gap-2">
        {Object.entries(interests).map(interest => {
          const id = `${props.name}_${interest}`;
          return (
            <div key={interest} className="flex-1">
              <input
                id={id}
                type="checkbox"
                name={props.name}
                className="hidden"
                value={interest}
                checked={props.value === interest}
                onChange={() => props.onChange(props.name, interest)}
              />
              <label
                htmlFor={id}
                className="flex items-center justify-center w-full button-glow cursor-pointer"
              >
                {interest}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tags;
