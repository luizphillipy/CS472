/**
 * Find First 
 */
"use strict"
/**
 * Finds and return the first N elements 
 * on any array
 * If the length of the array
 * is less than N, then throws
 * an error with error message
 * 
 * @returns first N elements
 */
Array.prototype.findFirstN = function(n) {
    const findFirstNElements = [];
    if(n>this.length)
    throw new Error("Error: Insuficient items")
    
    for(let i=0; i<n;i++){
        findFirstNElements.push(this[i]);
    };
    return findFirstNElements;
}
try{
    const numbers = [3,6,2,1];
    const result=numbers.findFirstN(2);
    console.log(result);
}catch(error){
    console.log(error.message);
}
//alternative
