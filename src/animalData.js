const animals = [
  { name: "cat", sound: "meow", feedingRequirements: { water: 1, food: 2 } },
  { name: "dog", sound: "woof" },
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}

export default animals;
export { useAnimals };
