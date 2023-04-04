import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./components/Wrapper";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
