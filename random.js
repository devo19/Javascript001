console.log(Math.random()); // any random number

console.log(Math.floor(Math.random() * 10 )); // random number rounded off

function randomRange(max, min){
  return Math.floor(Math.random() * (max - min +1)) + min; // random number in a range
}

console.log(randomRange(1,100));

console.log(parseInt("007"));  // convert String into int
console.log(parseInt("12" , 4));