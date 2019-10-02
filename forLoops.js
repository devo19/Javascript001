var arr = [1,2,3,4];

for(var i =0; i<arr.length; i++){
   console.log(arr[i]);
}

var myArr = []; // initialize an empty array
for(var i = 0; i < 5; i++){
    if (i>3) break; // you can add a condition if needed
    myArr.push(i); // as it loops it fills the array
}
console.log(myArr);

var arr7 = [10,9,8,7,6,5];
for(var i =0; i<arr.length; i++){
    console.log(arr7[i]);
}

var arr = [[1,2], [3,4], [5,6]]; // nested for loop 
for(var i =0; i<arr.length;i++){
    for(var j=0; j<arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

