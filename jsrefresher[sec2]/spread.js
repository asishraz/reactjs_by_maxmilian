// ... spread operator

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];

// console.log(arr2);
//? output will be [1,2,3,4,5,6]

//* if not using the spread operator, the output would be [[1,2,3], 4,5,6]

const arr3 = [arr, 4, 5, 6];
// console.log(arr3);

//! ... spread operator in object properties:

const person = {
  name: "asish",
};

const newPerson = {
  ...person,
  gender: "male",
};

console.log(newPerson);

//todo spread operator

// spread operator splits the array element or obj properties
