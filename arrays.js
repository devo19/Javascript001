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

// below array copying

var arr2 = ["one", "two", "three"];
var arr3 = ["four", "five", "six"];

var arr4 = arr2.slice(0);  // slice array copy
console.log(arr4);

var arr5 = [...arr3]; // spread opeartor
console.log(arr5);

var deepArray = [["hello"]];
var shallowcopy = deepArray.slice(0);
console.log(shallowcopy);

//shallowcopy[0].push("hi");
//console.log(shallowcopy[0]);

var deepCopy = JSON.parse(JSON.stringify(deepArray)); 
// deep copy - when you have an array with an object inside it (array in array) always do deep copy never shallow copy to make sure everything is copied properly
deepCopy[0].push("hi");
console.log(deepArray[0] , deepCopy[0]);

