setTimeout(function() {
  console.log("Work 1");
  setTimeout(function() {
    console.log("Work 2");
  }, 1000);
}, 1000);
console.log("End");

new Promise(function(resolve, reject) {
  // Work
  if (success) resolve(result);
  else reject(Error("failure"));
});

//find
[4, 5, 1, 8, 2, 0].find(x => x > 3);

//findindex
[4, 5, 1, 8, 2, 0].findIndex(x => x > 3);

//repeat
console.log("foo".repeat(3));

"somerandomstring".startsWith("some", 0); // true
"somerandomstring".endsWith("string", 4); // true
"somerandomstring".includes("stri"); // true
"somerandomstring".includes("ng", 1); // true
"somerandomstring".includes("ttto", 2); // false
