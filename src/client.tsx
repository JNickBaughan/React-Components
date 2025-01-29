import React from "react";
import ReactDOM from "react-dom";

import Form from "./forms/Form";
import "./styles/global.css";

const App = ({ text }: { text: string }) => {
  return (
    <div>
      <Form />
    </div>
  );
};

ReactDOM.render(
  <App text={"React: hello world"} />,
  document.getElementById("root")
);
