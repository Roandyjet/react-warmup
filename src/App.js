import React from "react";
import "./App.css";
import { add, divide, multiply, substract } from "./components/calculator";
import Heading from "./components/Heading";
import List from "./components/List";
import pi, { doublePi, triplePi } from "./components/Math";

const App = () => {
  return (
    <div>
      <Heading />
      <List />
      <h1> {pi} </h1>;<h2> {doublePi()} </h2>;<h3> {triplePi()} </h3>;
      <ul>
        <li> {add(20, 2)} </li>
        <li> {substract(27, 5)} </li>
        <li> {multiply(2, 11)} </li>
        <li> {divide(44, 2)} </li>
      </ul>
    </div>
  );
};

export default App;
