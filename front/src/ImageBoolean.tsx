interface Props {
  imageOn: string;
  imageOff: string;
  isOn: boolean;
  action: any;
}

const ImageBoolean = (props: Props) => (
  <div>
    <img
      src={props.isOn ? props.imageOn : props.imageOff}
      alt="imageBoolean"
      className="cursor-pointer w-5 h-5 my-1 mx-2"
      onClick={props.action}
    />
  </div>
);

export default ImageBoolean;
