import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hey and Hello");

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = (
  <h1 class="classJSX" id="headinJSX">
    Hey and hello from JSX h1 tag
  </h1>
);
console.log(jsxHeading);

const newObj = (
  <div>
    {heading}
    {jsxHeading}
  </div>
);

let Title = () => {
  return (
    <h1 className="title">
      I am a Title Component inside Heading Component, But you won't find the
      difference!
    </h1>
  );
};

var HeadingComponent = () => {
  return (
    <>
      <Title />
      <h1 className="Heading"> Functional Component Rendered!</h1>;
    </>
  );
};

//root.render(newObj);

root.render(<HeadingComponent />);
