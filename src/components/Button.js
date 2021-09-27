function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`border-solid border-4 border-${props.color}-200 rounded-md bg-${props.color}-200 hover:bg-${props.color}-300 hover:border-${props.color}-300 active:bg-${props.color}-400 active:border-${props.color}-400 shadow-sm ${props.addonClasses} px-md text-base`}
      type={props.type ? props.type : 'button'}
    >
      {props.value}
    </button>
  );
}

export default Button;
