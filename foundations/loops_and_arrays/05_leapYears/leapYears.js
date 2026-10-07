const leapYears = function(year) {
    //check if year is divisible by 4
    if (year % 4 == 0){
        //check if year is divisible by 100 and not by 400 then return false
        if(year % 100 == 0 && year % 400 != 0){
            return false;
        } else {
            // if it is divisible by 4 and not divisible by 100 return true
            return true;
        }
        
    } else {
        //not divisible by 4 return false
        return false;
    }
    
};

// Do not edit below this line
module.exports = leapYears;
