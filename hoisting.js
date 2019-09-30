console.log(definedLater);
var definedLater = "I am defined";
console.log(definedLater);

func();
function func(){
    console.log("Do something");
}


var functionVar = function(){
    console.log("I did it!");    
}

console.log(definedNow);
var definedNow;
definedNow = "I just got defined";
console.log(definedNow);