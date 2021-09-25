function Input(props) {
  return (
    <input
      className="
      input
      w-48
      border-2
      border-green-200
      rounded-md 
      focus:border-green-500"
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
