//* ... rest operator, same as spread operator

const arr = (...args) => {
  return args.filter((el) => el === 2);
};

console.log(arr(1, 2, 3));
