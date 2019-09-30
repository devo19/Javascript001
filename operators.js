var myAge = 31;

if(myAge <= 3){
    console.log("You are a baby");
}else if(myAge <=18){
    console.log("You are a child");
}else if(myAge > 18){
    console.log("You are an adult");
}

var votingAge = 21;

if(votingAge == 21){console.log("You can vote")};

// Ternary operators
var yourAge = 10;
console.log((yourAge>=18) ? "You can vote" : "You are too young"); // condensed way to write if/else

// Ternary operator inside another Ternary operator
var firstCheck = false;
var secondCheck = false;
access = firstCheck ? "access denied" : secondCheck ? "access denied" : "access granted";
console.log(access);

