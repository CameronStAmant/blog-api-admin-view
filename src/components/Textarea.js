function Textarea(props) {
  return (
    <textarea
      className="box-border border-2 shadow-sm rounded-md gap-4 border-cyan auto-rows-min w-full block mb-2"
      rows="4"
      name="body"
      value={props.value ? props.value : ''}
      onChange={props.onChange}
      required
    />
  );
}

export default Textarea;
