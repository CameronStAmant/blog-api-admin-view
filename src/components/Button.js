function Button(props) {
  return (
    <input
      type={props.type}
      className="border-solid border-4 border-green-200 rounded-md bg-green-200 hover:bg-green-300 hover:border-green-300 active:bg-green-400 active:border-green-400 shadow-sm"
      value={props.value}
    />
  );
}

export default Button;
