// let a = React.createElement("h2",{id:"ele" ,sdsdu:"ere"},"hello world using react");
// let root= ReactDOM.createRoot(document.getElementById("head"));
// root.render(a);

import React from "react";
import ReactDOM from "react-dom/client";

// const jsxheading = <h1 id="heading"> Namste react using jsx </h1>

//react fucntional component
const Jsxheading = () => {
  return (
    <>
      <Secondcomp />
      <h1 id="heading"> Namste react using react functional component </h1>
      {element}
    </>
  );
};

const element = <span>this is react element inside component 1 </span>;
// fragment since it is not embed in a div

// let Secondcomp= ()=>{return (<p>hi this is second component</p>)}; same as below used arrow fn shorthand method
let Secondcomp = () => <p>hi this is second component inside first</p>;

// const heading=React.createElement("h1",{id:"new"},"this is heading");
// console.log(jsxheading);
// const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},React.createElement("h1",{},"this is h4😍🎃")),React.createElement("div",{id:"child"},"child2")]);
// let display=ReactDOM.createRoot(document.getElementById("head"));
const root = ReactDOM.createRoot(document.getElementById("head"));
// console.log(heading);

// root.render(heading);
// root.render(Jsxheading);
root.render(<Jsxheading />); // for functional component use angulars for render
