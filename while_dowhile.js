var n = 0;

while(n<3){
    n++;
    console.log("n = " + n);
}

var i = 0;

do{
    i++;
    if(i == 3) continue; // continue skips the code below it and goes back up for next iteration
    if(i == 6) break; // break checks for the condition and if true breaks out of the loop
    console.log("i = " + i);
}while(i<7);