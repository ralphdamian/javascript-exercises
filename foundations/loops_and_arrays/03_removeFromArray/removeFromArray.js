const removeFromArray = function(arr, ...toRemove){ 
    //iterate over toRemove
    for (const item of toRemove){
        //check if item is in arr
        while (arr.includes(item)){
            //if it is remove it from arr
            arr.splice(arr.indexOf(item), 1);
        }
        
    } 
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
