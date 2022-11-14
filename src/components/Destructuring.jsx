import React from "react";
import animals, { useAnimals } from "../animalData";
import cars from "../carData";

// Animals destructuring
const [cat] = animals;

// As per the rules of Hooks, Hooks should be called from a React function or a custom component function.
// So we can't just type console.log(useAnimals(cat))
Details();

function Details() {
  const [animal, makeSound] = useAnimals(cat);
  console.log(animal);
  makeSound();
}

// Unlike arrays, when destructuring and object { name, sound } should match the keys in the object to destructure.
// const { name, sound } = cat; NOT const { n, s} = cat;

// destructuring nested object:
// const {
//   feedingRequirements: { water, food },
// } = cat;

// Change var names: we can change the name of the variable:
// const { name: catName, sound: catSound } = cat;

// Assign default value to keys: if the original object does not have any value for any key, it can be replaced by the following default values:
// const { name = "Mishah", sound = "Meh!" } = cat;

// Car destructuring

const [honda, tesla] = cars;
// const { coloursByPopularity, speedStats } = honda;
// const [hondaTopColour] = coloursByPopularity;
// const { topSpeed: hondaTopSpeed } = speedStats;
// console.log(honda);

// const { coloursByPopularity: topColor, speedStats: speed } = tesla;
// const [teslaTopColour] = topColor;
// const { topSpeed: teslaTopSpeed } = speed;

// _______________________________OR_____________________________

const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const Destructuring = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </thead>
    </table>
  );
};

export default Destructuring;
