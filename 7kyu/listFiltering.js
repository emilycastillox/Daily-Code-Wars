/*
INSTRUCTIONS

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

P: an array of non-negative integers and strings
R: a new array with strings filtered out
E: [3, 4, 5, 'o', 'k'] // [3,4,5] ; ['1', '2', 3, 4, 5, '6'] // [3,4,5]
P: heck each element in the array, and see if it is a string or number
if it is a string, we want to remove it
if it is a number/integer, we want to keep, or put it into a new array
returnnew array with just numbers

typeof and practice push method as well
*/ 

function filter_list(l) {
    let newArr = [];
         for(let i = 0;i <l.length; i++){
            if (typeof l[i] === "number"){
                newArr.push(l[i]);
            }
        }
        console.log(newArr)
        return newArr;
    }
filter_list([1,2,'a','b'])