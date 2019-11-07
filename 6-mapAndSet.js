// A Map object can be used to hold key / value pairs.A key or value in a map can be anything(objects and primitive values).

// The syntax new Map([iterable]) creates a Map object where iterable is an array or any other iterable object whose elements are arrays(with a key / value pair each).

// An Object is similar to Map but there are important differences that make using a Map preferable in certain cases:
// 1) The keys can be any type including functions, objects, and any primitive.
// 2) You can get the size of a Map.
// 3) You can directly iterate over Map.
// 4) Performance of the Map is better in scenarios involving frequent addition and removal of key / value pairs.

// The size property returns the number of key / value pairs in a map.

let map = new Map();

map.set("k1", "v1").set("k2", "v2");

console.log(map.get("k1")); // v1

console.log(map.has("k2")); // true

for (let kv of map.entries()) console.log(kv[0] + " : " + kv[1]);

//ques
map.set("one", 1);
map.set("2", "two");
if (map.has("two")) {
  console.log("two");
} else {
  console.log(map.get("one"));
}

//sets
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set);
