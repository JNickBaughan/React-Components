import React from "react";

import Input from "../components/Input";
import DropDown from "../components/drop-down";

const Form = () => {
  const [input, setInput] = React.useState("");
  return (
    <div className="form">
      <div className="form-input">
        <div>input one</div>
        <Input value={input} changeHandler={setInput} />
      </div>
      <div className="form-input">
        <div>drop down one</div>
        <DropDown />
      </div>
      {input}
    </div>
  );
};

export default Form;
