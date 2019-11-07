//older way

let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
  console.log(arr[k]);
}

//what if you want to loop through an object?
//Solution for...in LOOP!

let obj = { a: 1, b: 2, c: 3 };
for (let v in obj) {
  console.log(v);
}

//similar for...of

let items = ["x", "y", "z"];
for (let item of items) {
  console.log(item);
}

//functions

//Older way
function add(x, y) {
  var sum = x + y;
  console.log(sum);
}

//newer way

const add = (x, y) => {
  let sum = x + y;
  console.log(sum);
};

// compressed arrow function
const greet = x => "Welcome " + x;

//function without arguments
const x = () => alert("Hi");

//give example of arrow fn with default parameters
