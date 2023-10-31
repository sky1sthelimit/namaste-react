import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hey and Hello");

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = <h1>Hey and hello from JSX h1 tag</h1>;
const newObj = (
  <div>
    {heading}
    {jsxHeading}
  </div>
);
root.render(newObj);
