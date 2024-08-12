import React from "react";
import ReactDOM from "react-dom";

const HeadingComponent = () => {
  return (
    <div id="akhila">
      <h1>HELLO FUNCTIONAL COMPONENT - AKHILA</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
