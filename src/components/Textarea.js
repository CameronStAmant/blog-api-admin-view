function Textarea(props) {
  return (
    <textarea
      className="box-border border-2 shadow-sm rounded-md gap-4 border-green-200 auto-rows-min w-full block mb-2"
      rows="12"
      name="body"
      value={props.value ? props.value : ''}
      onChange={props.onChange}
      required
    />
  );
}

export default Textarea;
