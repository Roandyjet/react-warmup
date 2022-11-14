import React from "react";

const currentTime = new Date().getHours();
console.log(currentTime);

let customStyle = {
  color: "red",
};

const Heading = () => {
  // to test different time of the day: const currentTime = new Date(2011, 2, 14, 21).getHours();

  // if (currentTime < 12) {
  //   status = "Morning";
  //   customStyle.color = "Yellow";
  // } else if (currentTime >= 12 && currentTime <= 18) {
  //   status = "Afternoon";
  //   customStyle.color = "Orange";
  // } else {
  //   status = "Night";
  //   customStyle.color = "Blue";
  // }

  // another method using ternary operator-------------

  const greeting =
    currentTime < 12
      ? "Good Morning"
      : currentTime >= 12 && currentTime <= 18
      ? "Good Afternoon"
      : "Good Night";

  // Maybe we can't change multiple variables when using ternary operator.
  currentTime < 12
    ? (customStyle.color = "yellow")
    : currentTime >= 12 && currentTime <= 18
    ? (customStyle.color = "orange")
    : (customStyle.color = "blue");
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
};

export default Heading;
