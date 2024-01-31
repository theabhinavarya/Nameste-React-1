import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const heading = React.createElement("h1", {id: "heading"}, "Nameste React"); 

// JSX
const jsxHeading = <h1 id="heading">Nameste JSX </h1>;

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(jsxHeading);


root.render(jsxHeading);