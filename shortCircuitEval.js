if(3 < 4 || 5 < 6){
    console.log("hi");
}

var test = true;
var isTrue = function(){
    console.log("Test is true");
}
var isFalse = function(){
    console.log("Test is false");
}

if(test){
    isTrue();
}

( test && isTrue()); // easier way to write - test if a var is true anf then run the function
( !!test && isFalse());

var test1 = false;
(test1 || isFalse());{
    console.log("Test is false");
}

function someFunc(name){
name = name || 'Abbas'; // short-circuit eval example
console.log("My best friend's name is " + name);
}

someFunc();
someFunc('Shamim');