export function Input(props) {
  return (
    <div>
      <div>
        <label htmlFor={props.htmlFor} className="uppercase mb-[0.3rem]">
          {props.label}
        </label>
        <input
          className="p-[0.5rem] text-[18px] rounded-md border-2 border-solid border-Dark-grayish-violet"
          style={props.style}
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          required
        />
      </div>
    </div>
  );
}
