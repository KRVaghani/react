import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Hi() {
  let tag = (
    <div class="App">
      Hello <strong>kaushik</strong>!
    </div>
  );
  return tag;
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
