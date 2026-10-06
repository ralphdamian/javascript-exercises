//Function that takes a string and a number and repeats the string the number amount of times
function repeatString(text, num){
    // check if number is greater than 0
    if (num > 0){
        //loop through num amount of times and log the text
        for (let i = 0; i < num; i++){
        console.log(text);
    }
    // if 0 or less log error
    } else {
        console.log("ERROR");
    }
    
}

repeatString("turtles are cool", 5);
repeatString("turtles are cool", -2);