import React from "react";
import ReactDOM from "react-dom";

const name = "Shambhu";
const surname = "Jagtap";

ReactDOM.render(
  <h1>Hello {`${name} .. ${surname}`} </h1>,
  document.getElementById("root")
);
