function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`border-solid border-4 rounded-md shadow-sm  px-md text-base text-white ${
        props.color === 'red'
          ? 'border-dark-red bg-dark-red hover:bg-hover-dark-red hover:border-hover-dark-red active:bg-dark-red active:border-dark-red'
          : 'border-cyan bg-cyan hover:bg-hover-cyan hover:border-hover-cyan active:bg-cyan active:border-cyan'
      } ${props.addonClasses}`}
      type={props.type ? props.type : 'button'}
    >
      {props.value}
    </button>
  );
}

export default Button;
