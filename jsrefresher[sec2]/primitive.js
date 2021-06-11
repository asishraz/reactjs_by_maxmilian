let n1 = 2;
const n2 = n1;
n1 = 3; //here, even the value of n1 got changed but the n2 value will remain 2

console.log(n2);

// primitive data types like numbers, string copy the value and not the reference
