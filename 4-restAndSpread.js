//rest
const addAndSub = (...x) => {
  console.log(x);
};

addAndSub(1, 2, 3, 4, 5);

//spread

const foo = (a, b, c, d, e) => {
  console.log(a, e);
};

let arr = [5, 6, 7, 8, 9];
foo(...arr);

getYearFromDate = (...date) => {
  console.log(date);
};

getYearFromDate("1999", "5", "2");

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 5 };
const merge = (...objects) => ({ ...objects });

let mergedObj = merge(obj1, obj2);

let mergedObj2 = merge({}, obj1, obj2);
