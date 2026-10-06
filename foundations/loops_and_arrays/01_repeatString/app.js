//Function that takes a string and a number and repeats the string the number amount of times
function repeatString(text, num){
    if (num > 0){
        for (let i = 0; i < num; i++){
        console.log(text);
    }
    } else {
        console.log("ERROR");
    }
    
}

repeatString("turtles are cool", 5);
repeatString("turtles are cool", -2);