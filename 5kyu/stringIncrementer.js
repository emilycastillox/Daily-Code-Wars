/*
INSTRUCTIONS: Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

PREP:
P: A string 
R: return a new string, that is incremented (ends with a number +1, no number 1 will be added to the end)
E: (cool) -> cool1
    (cool24) -> cool25
    (cool0030) -> cool0031
P: We want to create conditionals to add the number to the string that is taken in, but also take into account strings that have leading numbers as well, we may have tp turn the string into a number
index of string


notes: cool1 (split)-> ['c','o','o','l','1']
arr[4] = parseInt turn into number
turn string into an array using split
turning the intergers in the array into a number (parseInt)?
if it does not have a number, then we want to concatenate and add the number 1 to the end {cool} + 1 
if its converted to a number and its greater than 0 then add 1 to that number - conditional
join the numbers in the array 
loop through array of characters, which one is a number - join them together 
join the array of characters to create the original word and then concatenate the updated number to the joined word 
return the new updated value
*/

function incrementString (str) {
        const body = str.slice(0, -1);
        const lastDigit = str.slice(-1).match(/[0-9]/);
        return lastDigit === null
          ? str + "1"
          : lastDigit != 9
          ? body + (+lastDigit + 1)
          : incrementString(body) + "0";
    }