function findFirstN(n, numbers){
    let result = [];
    if(n>numbers.length){
        return console.log("Error: Insufficient items");
    } else{
        for(let i=0;i<=n;i++){
            result.push(numbers[i]);
        }   
    }
    return console.log(result);
}
findFirstN(3, [1,3,6,2]);
findFirstN(5, [1,3,6,2]);
