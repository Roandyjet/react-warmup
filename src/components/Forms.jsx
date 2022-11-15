import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState();

  function handleClick(event) {
    setHeadingText(name);

    // event.preventDefault() (to prevent the page from refreshing when the button is clicked)
    event.preventDefault();
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>

      <form action="">
        <input
          type="text"
          onChange={handleChange}
          placeholder="What's your name?"
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
