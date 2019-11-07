let stick = {
  height: 10,
  color: "red",
  changeColor() {
    this.color = "blue";
  }
};

stick.changeColor();
console.log(stick);

// short hand property value

let height = 5;

let athlete = {
  height
};

//equals to

// let athlete = {
//   height: height
// };

//computed properties

let name = "something different";
var config = {
  [name]: 12,
  [name.charAt(0).toUpperCase() + "am"]: 4
};
console.log(config);

let obj1 = {};

let obj2 = {
  a: 1
};

let obj3 = {
  a: 2
};

obj1 = Object.assign(obj2, obj3);

console.log(obj1);

// Destructuring
//arr
let arr = ["1", "2", "3"];
let [one, two, three] = arr;

//obj
var obj = { id: 42, name: "Jack" };

let { id, age } = obj;

console.log(id); // 42
console.log(age); // 20
