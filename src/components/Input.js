function Input(props) {
  return (
    <input
      className={`
      border-2
      box-border
      border-green-200
      focus:border-green-500
      shadow-sm
      block
      mb-2
      ${props.addonClasses}`}
      type={props.type}
      id={props.id}
      name={props.name}
      autoComplete="on"
      value={props.value}
      onChange={props.onChange}
      required
    />
  );
}

export default Input;
