import React from "react";
import "./App.css";
import { add, divide, multiply, substract } from "./components/Calculator";
import Card from "./components/Card";
import Destructuring from "./components/Destructuring";
import EventHandling from "./components/EventHandling";
import Heading from "./components/Heading";
import List from "./components/List";
import pi, { doublePi, triplePi } from "./components/Math";

const App = () => {
  return (
    <div>
      {/* _____________________Importing/ Exporting */}
      <Heading />
      <List />
      <h1> {pi} </h1>;<h2> {doublePi()} </h2>;<h3> {triplePi()} </h3>;
      <ul>
        <li> {add(20, 2)} </li>
        <li> {substract(27, 5)} </li>
        <li> {multiply(2, 11)} </li>
        <li> {divide(44, 2)} </li>
      </ul>
      {/* _____________________props */}
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phoneNumber="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phoneNumber="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        phoneNumber="+918 372 574"
        email="gmail@chucknorris.com"
      />
      {/* _____________________destructuring */}
      <Destructuring />
      <EventHandling />
    </div>
  );
};

export default App;
