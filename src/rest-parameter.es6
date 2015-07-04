"use strict";

// rest parameter
var foo = function(a, b, ...c){
  console.log(c);
};

foo(1, 2, 3, 4, 5, 6, 7);

// spread operator
console.log([1, 2, ...[5, 7, 9]]);
