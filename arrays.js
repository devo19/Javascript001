var sandwich = ["bread", "potato", "tomato", "butter", "chutney"];
sandwich.forEach(function(element){  // for each loop to iterate through all elements in the array
    console.log(element);
});

console.log(sandwich[0]);

var teams = [["Plymouth Wildcats", 21], ["Wings", 11]]; // 2 arrays in 1 big array
console.log(teams[0][0]); // first inner array - first element in that array - Plymouth Wildcats
console.log(teams);
teams[0][1] = 51; // change second element in the first inner array
console.log(teams);

var arr = ["a", "b", "c"];
console.log(arr.pop()); // removes the last element
console.log(arr);

arr.push("d"); // add an elememt to the array
arr.push("z");
arr.push("s");
arr.sort(); // sort an array
console.log(arr);

var arr1 = ["x", "y", "z"];
console.log(arr.concat(arr1));
