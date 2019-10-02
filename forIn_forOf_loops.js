let x = {fname:"Shez", lname:"lak", age:41};

let y = [3,5,7];

let text = [];
for(let a in x){   // for in loop is to iterate properties 
    text += x[a];
    console.log(a);
}
console.log(text);

for(let b of y){  // for of loop is to iterate over items in an array
   console.log(b);
}