import React, { useState } from "react";

// const ComplexState = () => {
//   const [firstName, setFirstName] = useState("");

//   const [lastName, setLastName] = useState("");

//   function updateFname(e) {
//     const fName = e.target.value;
//     setFirstName(fName);
//   }

//   function updateLname(e) {
//     const lName = e.target.value;
//     setLastName(lName);
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {firstName} {lastName}
//       </h1>
//       <form>
//         <input
//           onChange={updateFname}
//           name="fName"
//           placeholder="First Name"
//           value={firstName}
//         />
//         <input
//           onChange={updateLname}
//           name="lName"
//           placeholder="Last Name"
//           value={lastName}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// _________________________ OR __________________________

const ComplexState = () => {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  function handleChange(e) {
    // const newValue = e.target.value;
    // const inputName = e.target.name;

    // setFullName((prevValue) => {
    //   if (inputName === "fName") {
    //     return { fName: newValue, lName: prevValue.lName };
    //   } else if (inputName === "lName") {
    //     return { fName: prevValue.fName, lName: newValue };
    //   }
    // });

    // OR destructured to:
    const { value, name } = e.target;
    console.log(e.target);
    setFullName((prevValue) => {
      if (name === "fName") {
        return { fName: value, lName: prevValue.lName };
      } else if (name === "lName") {
        return { fName: prevValue.fName, lName: value };
      }
    });

    // The below codes erase the previous value when typing a second value
    // inputName === "fName"
    //   ? setFullName({ fName: newValue })
    //   : setFullName({ lName: newValue });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          //   commenting value makes the code uncontrolled component
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          //   commenting value makes the code uncontrolled component
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ComplexState;
