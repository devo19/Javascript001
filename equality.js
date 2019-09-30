console.log(3 == '3'); // true
console.log(3 === '3'); // false

console.log(true == '1'); // true
console.log(true === '1'); // false

// String literals are diff than String objects
// It's always better to use === to check for strict equality
console.log("This is a String." == new String("This is a String.")); // true
console.log("This is a String." === new String("This is a String.")); // false

var test;
console.log(test); // undefined

test = null;
console.log(test); // null

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null == null); // true
console.log(null === null); // true
console.log(!null); // true
console.log(!!null); // false
console.log(1 + null); // 1
console.log(1 + undefined); // NaN
