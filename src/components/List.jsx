import React from "react";

const fName = "Rova";
const lName = "A";
const currentYear = new Date().getFullYear();

const List = () => {
  return (
    <div>
      <ul>
        <li>First list</li>
        <li>Second list</li>
        <li>Fird list</li>
      </ul>
      ;<p>Created by {fName + " " + lName} </p>
      <p>Copyright {currentYear} </p>
    </div>
  );
};

export default List;
