import React, { useState } from "react";

const MoreComplexState = () => {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function updateContact(e) {
    const { name, value } = e.target;

    setContact((prevValue) => {
      //   if (name === "fName") {
      //     return { fName: value, lName: prevValue.lName, email: prevValue.email };
      //   } else if (name === "lName") {
      //     return { fName: prevValue.fName, lName: value, email: prevValue.email };
      //   } else if (name === "email") {
      //     return { fName: prevValue.fName, lName: prevValue.lName, email: value };
      //   }

      // ---------------------------OR-----------------------------

      // Don't forget to put "return" when using ternary operator in a multiple condition
      // return name === "fName"
      // ? { fName: value, lName: prevValue.lName, email: prevValue.email }
      // : name === "lName"
      // ? { fName: prevValue.fName, lName: value, email: prevValue.email }
      // : name === "email"
      // ? { fName: prevValue.fName, lName: prevValue.lName, email: value }
      // : null;

      // ---------------------------OR using Spread operator-----------------------------
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={updateContact}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={updateContact}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={updateContact}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default MoreComplexState;

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events
