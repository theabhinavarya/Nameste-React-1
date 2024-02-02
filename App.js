import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const Title = () => (<h1 id="heading" tabIndex="5">Nameste JSX </h1>);

const fn = () => true;

const fn2 = () => {
    return true;
}

// React Compenent 

const number = 10000
const HeadingCompenent = () => (
    <div>
        {number}
        <h1>Nameste React</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompenent/>);