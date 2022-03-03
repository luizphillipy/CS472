//exercise 1
// 1.	Define a function max() that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript.
function max(num1, num2){
    if(num1>num2){
        return num1;
    } else{
    return num2;
    }
}
console.log("----------------Exercise 1--------------")
console.log(max(3,5));

//exercise 2
//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3){
    let max=num1;
    if (num2>max){
        max=num2;
    }if(num3>max){
        max=num3;
    }
    return max;
} 
console.log("----------------Exercise 2--------------")
console.log(maxOfThree(8,4,5));

//exercise 3
// 3.	Write a function isVowel() that takes a character (i.e. a string of length 1) and 
//returns true if it is a vowel, false otherwise.
function isVowel(digit){
    let text=digit;
    if(text.toLowerCase()=='a'||text.toLowerCase()=='e'||text.toLowerCase()=='i'||text.toLowerCase()=='o'||text.toLowerCase=='u'){
        return true;
    } return false;
}
console.log("----------------Exercise 3--------------")
console.log(isVowel('f'));
console.log(isVowel('A'));
console.log(isVowel('F'));
console.log(isVowel('e'));

//exercise 4
//4.	Define a function sum() and a function multiply() that sums and multiplies (respectively)
// all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10,
// and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming 
// approach (i.e. for…loop or while…loop)
function sumNumbers(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}
function multiplyNumbers(numbers){
    let mult=1;
    for(let i=0;i<numbers.length;i++){
        mult*=numbers[i];
    }
    return mult;
}
console.log("----------------Exercise 4--------------")
console.log(sumNumbers([1,2,3,4]));
console.log(multiplyNumbers([1,2,3,4]));

//exercise 5
//5.	Define a function reverse() that computes the reversal of a string. 
//For example, reverse("jag testar") should return the string "ratset gaj".

function reverse(str){
    let reversed='';
    for(let i=str.length-1;i>-1;i--){
        reversed+=str[i];
    }
    return reversed;
}
console.log("----------------Exercise 5--------------")
console.log(reverse('I love javaScript!!'));

//exercise 6
// 6.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(words){
    let longest=words[0];
    for(let i=1;i<words.length;i++){
        if(words[i].length>longest.length){
            longest=words[i];
        }
    }
    return "The longest word is "+longest+" and its length is "+longest.length;
}
console.log("----------------Exercise 6--------------")
console.log(findLongestWord(['rice','beans','chicken','barbecue']));

// exercise 7
//7.	Write a function filterLongWords() that takes an array of words and an integer i and returns a new array 
// containing only those words that were longer than i characters.
function filterLongWords(words, j){
    //imperative programming
    let filteredArray=[];
    for(let i=0;i<words.length-1;i++){
        if(words[i].length>j){
            filteredArray.push(words[i]);
        };
    };
    return filteredArray;
}
  //function programming
  function filterLongWords2(){
  const result = (words, i) => words.filter(w=> w.length>i);
  }
  
  console.log("----------------Exercise 7--------------")
console.log(filterLongWords(['rice','beans','chicken','barbecue','pea'],4));

//exercise 8

//8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers 
//and calculates and returns the sum of the squares of each number in the input array. 
//E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14.
// Note: Write your Javascript code without using Imperative programming. i.e.
// Do NOT use any explicit looping construct; instead use functional programming style/approach.

function computeSumOfSquares(numbersTo){
    const sumOfSquares=numbersTo.map(num=>num*num)
    .reduce((acc,val) => acc+val);
    return sumOfSquares;

}
console.log("----------------Exercise 8--------------")
console.log(computeSumOfSquares([1,2,3]));

// exercise 9

//9.	Write a function named, printOddNumbersOnly, that takes as input, an array of integral
// numbers and it finds and prints only the numbers which are odd.
function printOddNumbersOnly(numbersTo){
    const oddNumbers = numbersTo.filter((num)=>num%2==1).forEach((num=> console.log(num)));
    return oddNumbers;
}
console.log("----------------Exercise 9--------------")
printOddNumbersOnly([1,2,3,4,5,6,7,8,9]);

// exercise 10
//10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of
// integral numbers and calculates and returns the sum of the squares of only the even numbers 
//in the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed 
//as 22 +42 = 20.

function computeSumOfSquaresOfEvensOnly(numbersTo){
    const sumOfSquaresEven= numbersTo.filter((num)=>num%2==0).map((num)=>num*num)
    .reduce((acc,val)=> acc+val);
    return sumOfSquaresEven;
}

console.log("----------------Exercise 10--------------")
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));

// exercise 11
//11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) 
//(defined in Problem 4 above) without using Imperative programming. i.e. Do NOT use any 
//explicit looping construct; instead use functional programming style/approach

function multiplyNumbersFnc(numbers){
    const result = numbers.reduce((acc,val)=>acc*val,1);
    return console.log(result);
}
function sumNumbersFnc(numbers){
    const result = numbers.reduce((acc,val)=>acc+val,0);
    return console.log(result);
}
console.log("----------------Exercise 11--------------")
multiplyNumbersFnc([1,2,3,4,5]);
sumNumbersFnc([1,2,3,4,5]);

//Exercise 12
//12.	Implement Javascript code for a function named, findSecondBiggest, which takes as input,
// an array of numbers and finds and returns the second biggest of the numbers. For example, 
//findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) 
//should return 12. (Note: Do not use sorting!)

function findSecondBiggest(numbers){
    let bigest = 0;
    let second = 0;
    for (let i =0; i<numbers.length;i++){
        if (bigest<numbers[i]){
            second=bigest;
            bigest=numbers[i];
        };
        if(second<numbers[i] && bigest>numbers[i]){
            second=numbers[i];
        };
    }
    return console.log(second);
}
console.log("--------------------Exercise 12--------------------")
findSecondBiggest([1,2,3,4,5]);
findSecondBiggest([19,9,11,0,12]);

//Exercise 13
//13.	Write a function named printFibo, that takes as input, a given length, n, and any two 
//starting numbers a and b, and it prints-out the Fibonacci sequence, e.g. 
//(0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. 
//(e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), 
//prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
//printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and 
//printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
function printFibo(n, a, b){
    let result=[];
    let fibA=a;
    let FibB=b
    let FibC=fibA+FibB;
    if (n==1){
        result.push(a);
        return console.log(result);
    }
    if (n==2){
        result.push(a);
        result.push(b);
        return console.log(result);
    }
    if(n>=2){
        result.push(a);
        result.push(b);
        for (let i=3;i<=n;i++){
            FibC=fibA+FibB;
            result.push(FibC);
            fibA=FibB;
            FibB=FibC;
        }
    }
    return console.log(result);
}

console.log("-------------------Exercise 13------------------------")
printFibo(1,0,1);
printFibo(2,0,1);
printFibo(3,0,1);
printFibo(6,0,1);
printFibo(10,0,1);

//exercise 14
//14.	Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML 
//forms as follows:
//a.	Login Form: Add code such that when the Submit button is clicked, the values entered 
//in the input fields are printed to the Console.
//b.	New Product Form: Add code such that when the Submit button is clicked, the values 
// entered in the input fields are displayed in a pop-up window.
