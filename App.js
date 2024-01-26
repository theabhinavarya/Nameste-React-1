/**
 * 
 *<div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tage</h1>
 *          <h1>I am h1 tage</h1>
 *      </div>
 *      <div id="child2">
 *          <h1>I am h1 tage</h1>
 *          <h1>I am h1 tage</h1>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understand)
 */

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