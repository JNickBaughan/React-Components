import React from "react";

const Input = ({
  value,
  changeHandler,
}: {
  value: string;
  changeHandler: any;
}) => {
  const [localValue, setLocalValue] = React.useState(value ?? "");
  const [hasFocus, setHasFocus] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <div
        onClick={() => {
          inputRef?.current?.focus && inputRef.current.focus();
        }}
        className="input"
      >
        <div>{localValue}</div>
        {hasFocus && <div className="blink" />}
      </div>
      <input
        className="hidden"
        ref={inputRef}
        onChange={(input) => {
          setLocalValue(input.currentTarget.value);
        }}
        onFocus={() => setHasFocus(true)}
        onBlur={() => {
          changeHandler(localValue);
          setHasFocus(false);
        }}
      />
    </>
  );
};

export default Input;
