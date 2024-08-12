import React from "react";
import ReactDOM from "react-dom";

//React element / simply javascript variable
const elem = (
  <span>
    React Element
    <br />
  </span>
);

const title = (
  <h1 tabIndex="5">
    {elem}
    Namaste React inside title javascript object
  </h1>
);

const TitleComponent = () => {
  return <h2 id="anila">Hello title component</h2>;
};

const number = 10000;

const HeadingComponent = () => {
  return (
    <div id="akhila">
      {title}
      <h2>{number}</h2>
      <TitleComponent />
      <h1>HELLO FUNCTIONAL COMPONENT - AKHILA</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
