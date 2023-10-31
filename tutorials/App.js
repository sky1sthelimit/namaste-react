/**
 *
 *  <div id="parent">
 *      <div id="child">
 *          <h1 id="heading"> Hey i am h1 </h1>
 *          <h2 id="heading2"> Hey i am h2 </h2>
 *      <div>
 *  <div>
 *
 *   Recreating the above nested html code using React.createElement()
 */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {
    id: "parent",
    xyz: "abc",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },

    React.createElement("h1", { id: "heading" }, "Hey i am h1"),
    React.createElement("h2", { id: "heading2" }, "Hey i am h2")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
