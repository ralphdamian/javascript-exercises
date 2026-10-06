const sumAll = function(num1, num2) {
    //check if num1 or num2 are good numbers
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if (typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR";
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    //add all numbers between num1 and num2
    //declare a variable to hold the numbers in and the total
    let total = 0;
    let bigNum;
    let smallNum;
    
    //compare num1 and num2 and see which is bigger
    //assign the bigger to bigNum and the smaller to smallNum
    if (num1 > num2){
        bigNum = num1;
        smallNum = num2;
    }else {
        bigNum = num2;
        smallNum = num1;
    }
    //add the numbers between smallNum and bigNum
    for (let i = smallNum; i <= bigNum; i++){
        total += i;
    }
    return total;
    
    
};

// Do not edit below this line
module.exports = sumAll;
