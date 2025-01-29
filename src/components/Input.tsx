import React from "react";

const Input = ({
  value,
  changeHandler,
}: {
  value: string;
  changeHandler: any;
}) => {
  const [localValue, setLocalValue] = React.useState(value ?? "");
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <div
        onClick={() => {
          inputRef?.current?.focus && inputRef.current.focus();
        }}
        className="input"
      >
        {localValue}
      </div>
      <input
        className="hidden"
        ref={inputRef}
        onChange={(input) => {
          setLocalValue(input.currentTarget.value);
        }}
        onBlur={() => changeHandler(localValue)}
      />
    </>
  );
};

export default Input;
