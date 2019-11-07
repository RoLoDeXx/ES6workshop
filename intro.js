// variable declaration
var a = 20;
const b = "DSC JIIT";
let c = true;

// diff between var and let

function varTest() {
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}

function letTest() {
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}

// practice
let x = 1;
if (true) {
  let x = 2;
  console.log(x);
}
console.log(x);

// const

const a = "Hello";
a = "trying to change";

//template literals

let name = "DSC JIIT";
let msg = "Welcome to " + name + "!";
console.log(msg);

msg = `Welcome ${name}!`;
console.log(msg);
