function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`border-solid border-4 rounded-md shadow-sm ${
        props.addonClasses
      } px-md text-base ${
        props.color === 'green'
          ? 'border-green-200 bg-green-200 hover:bg-green-300 hover:border-green-300 active:bg-green-400 active:border-green-400'
          : 'border-red-200 bg-red-200 hover:bg-red-300 hover:border-red-300 active:bg-red-400 active:border-red-400'
      }`}
      type={props.type ? props.type : 'button'}
    >
      {props.value}
    </button>
  );
}

export default Button;
