/*
INSTRUCTIONS:

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer

P: an integer/number
R: an integer/number - concatenated
E: 62245 // 36441625 ; 31129 // 911481
P: 
separate each number - into an array, 
square each number separately
join each number using concatenation

*/ 


function squareDigits(num){
    let result = "";
    num = num.toString();
    for (let i = 0; i < num.length; i++){
        result = result + (num[i] * num[i]).toString();
    }
    return Number(result);
}
