import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const jsxHeading = <h1 id="heading">Nameste JSX </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(jsxHeading);

root.render(jsxHeading);