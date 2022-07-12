/* 
INSTRUCTIONS: 

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"


P: a string
R: a revised string with # for all characters except the last 4
E: '12345678' // ####5678; 'ABCDEFGHIJK' // '#######HIJK'
P: turn the string into an array - characters are each an element
go through each element - has to be length - 4 to keep last 4 numbers visible
if it is length - 4, turn into #
if not, stay as a visible character
join array, and return new string
*/

function maskify(cc) {
    cc = cc.split('');
    for(let i = 0; i < cc.length - 4; i++){
      cc[i] = '#';
  }
  
  cc = cc.join('');
  return cc
  }











  
  //other possible solution








function maskify(cc) {
    return cc.split('').map((letter, index) => index < cc.length - 4? '#' : letter).join('')
  }