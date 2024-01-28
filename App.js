import React from "react";
import ReactDOM from "react-dom/client";


 const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [    React.createElement(
        "div", 
        {id: "child"},
        [React.createElement("h1", {}, "i am h1 tage"),
        React.createElement("h1", {}, "i am h1 tage")]
        ),
        React.createElement(
            "div", 
            {id: "child2"},
            [React.createElement("h1", {}, "i am h1 tage"),
            React.createElement("h1", {}, "i am h1 tage")]
            )]
    );

//JSX

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent); 